import fs from 'fs'
import os from 'os'
import pathModule from 'path'
import _ from 'lodash'
import spawn from 'cross-spawn'
import { ContentItem } from '../types/core'
import { string } from 'prop-types';

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