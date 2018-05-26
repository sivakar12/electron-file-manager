import fs from 'fs'
import pathModule from 'path'

// Does not work for folders
export function copy(source, dest) {
    return new Promise((resolve, reject) => {
        fs.exists(dest, (exists) => {
            if (exists) {
                reject(new Error('File already exists'))
            }
            const rd = fs.createReadStream(source);
            const wr = fs.createWriteStream(dest);
            rd.on('error', reject);
            wr.on('error', reject);
            wr.on('finish', resolve);
            rd.pipe(wr);
        })
    })
}

export async function move(source, dest) {
    await copy(source, dest)
    await deletePermenently(source)
}

export function deletePermenently(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stat) => {
            if (err) return reject(err)
            if (stat.isDirectory()) {
                fs.rmdir(path, err => {
                    if (err) return reject(err)
                    return resolve()
                })
            } else {
                fs.unlink(path, err => {
                    if (err) return reject(err)
                    resolve()
                })
            }
        })
    })
}