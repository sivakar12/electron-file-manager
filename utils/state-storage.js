import jsonFile from 'jsonfile'
import pathModule from 'path'
import fs from 'fs'
import os from 'os'

const storedStateFile = pathModule.join(os.homedir(), '.electron-file-manager', 'stored-state.json')

export function storeStateInJsonFile(data) {
    return new Promise((resolve, reject) => {
        jsonFile.writeFile(storedStateFile, data, err => {
            if (err) return reject(err)
            return resolve()
        })
    })
}

// this is ugly. change after moving to fspromises
export function getStateFromJsonFile() {
    return new Promise((resolve, reject) => {
        fs.access(storedStateFile, err => {
            if (err) {
                createStateJsonFile().then(() => {
                    jsonFile.readFile(storedStateFile, (err, data) => {
                        if (err) return reject(err)
                        return resolve(data)
                    })
                })
            } else {
                jsonFile.readFile(storedStateFile, (err, data) => {
                    if (err) return reject(err)
                    return resolve(data)
                })
            }
        })
    })
}

export function createStateJsonFile() {
    return new Promise((resolve, reject) => {
        fs.mkdir(pathModule.dirname(storedStateFile), () => {
            jsonFile.writeFile(storedStateFile, {}, err => {
                if (err) return reject(err)
                return resolve()
            })
        })
    })
}