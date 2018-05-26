import fs from 'fs'
import pathModule from 'path'

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