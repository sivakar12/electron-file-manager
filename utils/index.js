const fs = require('fs')

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
    })
}