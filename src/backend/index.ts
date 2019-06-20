import fs from 'fs'
import os from 'os'
import pathModule from 'path'

import spawn from 'cross-spawn'
import _ from 'lodash'
import { Observable, Observer } from 'rxjs'
import { concatMap, scan, throttleTime, map } from 'rxjs/operators'

import { ContentItem, Path, PropertiesItem } from '../types/core'

const fsPromise = fs.promises

export function getHomeDirectory(): Path {
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

export function openFile(filePath: Path) {
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

export async function getFileDetails(path: Path): Promise<PropertiesItem> {
    const stat = await fsPromise.stat(path)
    console.log('Stat called')
    const properties: PropertiesItem = {
        name: pathModule.basename(path),
        fullPath: path,
        isDirectory: stat.isDirectory(),
        isSymLink: stat.isSymbolicLink(),
        size: stat.size,
        mode: stat.mode,
        lastAccessTime: stat.atimeMs,
        lastModifiedTime: stat.mtimeMs,
        createdTime: stat.ctimeMs
    }
    return properties
}

export function getFolderTree(path: Path, maxItems: number = -1): Observable<Path> {
    let itemsLooked = 0
    return Observable.create(async (observer: Observer<Path>) => {
        async function recurse(folder: Path) {
            const items = await fsPromise.readdir(folder)
            for (let i = 0; i < items.length; i++) {
                const childPath = pathModule.resolve(folder, items[i])
                observer.next(childPath)
                itemsLooked += 1
                if (itemsLooked === maxItems) {
                    observer.error({ message: 'Too many items'})
                    observer.complete()
                }
                const isFolder = (await fsPromise.stat(childPath)).isDirectory()
                if (isFolder) {
                    await recurse(childPath)
                }
            }
        }
        await recurse(path)
        observer.complete()
    })
}

export function getFolderSize(path: Path): Observable<number> {
    return getFolderTree(path, 1000)
            .pipe(concatMap(getFileDetails))
            .pipe(map(stats => stats.size))
            .pipe(scan((total, current) => total + current))
            .pipe(throttleTime(300))
}
