import pathModule from 'path'
import { exec, spawn } from 'child_process'
import _ from 'lodash'
import fs from 'fs'
import os from 'os'

export function getFiles(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, function(err, files) {
            if (err) {
                reject(err)
            } else {
                resolve(files)
            }
        })          
    }).then(files => {
        const promises = files.map(file => {
            return new Promise((resolve, reject) => {
                const filename = pathModule.join(path, file)
                fs.lstat(filename, (err, stat) => {
                    if (err) return reject(err)
                    const contents = {
                        name: file,
                        isDir: stat.isDirectory(),
                        isSymLink: stat.isSymbolicLink(),
                        size: stat.size
                    }
                    resolve(contents)
                })
            })
        })
        return Promise.all(promises)
    })
}


export function openFile(filePath) {
    return new Promise((resolve, reject) => {
        let command
        switch (os.platform()) {
            case 'linux':
                command = 'xdg-open'
                break
            case 'darwin':
                command = 'open'
                break
            case 'win-32':
            case 'win-65':
            case 'win32':
                command = 'start'
                break
            default:
                command = 'xdg-open'
        }
        try {
            command += ' "' + filePath + '"'
            console.log(command)
            spawn(command)
            resolve()
        } catch(e) {
            reject(e)
        }
    })
}

export function getHomeFolder() {
    return os.homedir()
}

export * from './state-storage'
export * from './folder-size'
export * from './file-transfers'