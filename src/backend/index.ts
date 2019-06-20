import fs from 'fs'
import os from 'os'
import pathModule from 'path'

import spawn from 'cross-spawn'
import _ from 'lodash'
import { Observable, Observer } from 'rxjs'
import { concatMap, scan, throttleTime } from 'rxjs/operators'

import { ContentItem, Path } from '../types/core'

const fsPromise = fs.promises

export function getHomeDirectory():string {
    return os.homedir()
}

export async function getFolderContents(path: string): Promise<ContentItem[]> {
    const files = await fsPromise.readdir(path)
    const filePaths = files.map(f => pathModule.join(path, f))
    const fileStats =  await Promise.all(filePaths.map(f => fsPromise.stat(f)))
    const fileDetails = _.range(0, files.length).map(i => {
        const stats = fileStats[i]
        return {
            name: files[i],
            path: filePaths[i],
            size: stats.size,
            isDirectory: stats.isDirectory(),
            isSymLink: stats.isSymbolicLink()

        }
    })
    return fileDetails
}

export function openFile(filePath: string) {
    return new Promise((resolve, reject) => {
        let command
        switch (os.platform()) {
            case 'linux':
                command = 'xdg-open'
                break
            case 'darwin':
                command = 'open'
                break
            case 'win32':
                command = 'start'
                break
            default:
                command = 'xdg-open'
        }
        try {
            command += ' "' + filePath + '"'
            spawn(command, [filePath], {detached: true} )
            resolve()
        } catch(e) {
            reject(e)
        }
    })
}

export async function getFileDetails(path: Path) {
    return await fsPromise.stat(path) 
}

export function copyFile(source: Path, destination: Path): Observable<number> {
    console.log(`Copying from ${source} to ${destination}`)
    const readStream  = fs.createReadStream(source)
    const writeStream = fs.createWriteStream(destination)
    readStream.pipe(writeStream)

    return Observable.create((observer: Observer<number>)  => {
        readStream.on('data', (bytesRead: Buffer)  => {
            observer.next(bytesRead.length)
        })
        readStream.on('error', e => observer.error(e))
        writeStream.on('close', () => {
            observer.complete()
        })
        writeStream.on('error', e => observer.error(e))
    })
    .pipe(scan((acc: number, x: number) => acc + x))
    .pipe(throttleTime(100))
}