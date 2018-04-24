import jsonFile from 'jsonfile'
import pathModule from 'path'
import _ from 'lodash'
const fs = require('fs') // Not webpack import
const os = require('os')

export function getFiles(path) {
    // const files = ['ps.epub', 'cos.epub', 'poa.epub', 
    //     'gof.epub', 'ootf.epub', 'hbp.epub', 'dh.epub']
    // return Promise.resolve(files)
    return new Promise((resolve, reject) => {
        fs.readdir(path, function(err, files) {
            if (err) {
                reject(err)
            } else {
                resolve(files)
            }
        })
        // .then(files => {
        //     files.map(file => {
        //         fs.
        //     })
        //     return Promise.all(files.ma)
        // })
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