import jsonFile from 'jsonfile'
import pathModule from 'path'
import _ from 'lodash'
const fs = require('fs') // Not webpack import
const os = require('os')

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
                        size: stat.size
                    }
                    resolve(contents)
                })
            })
        })
        return Promise.all(promises)
    })
}

const storedStateFile = pathModule.join(os.homedir(), '.electron-file-manager', 'stored-state.json')

export function storeStateInJsonFile(data) {
    return new Promise((resolve, reject) => {
        jsonFile.writeFile(storedStateFile, data, err => {
            if (err) return reject(err)
            return resolve()
        })
    })
}

export function getStateFromJsonFile() {
    return new Promise((resolve, reject) => {
        jsonFile.readFile(storedStateFile, (err, data) => {
            if (err) return reject(err)
            return resolve(data)
        })
    })
}