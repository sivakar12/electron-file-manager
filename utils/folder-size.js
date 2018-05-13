const fs = require('fs')
const pathModule = require('path')

function getFileInfo(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err) return reject(err)
            const output = {
                isDir: stats.isDirectory(),
                size: stats.size,
                name: path
            }
            resolve(output)
        })
    })
}

async function getFolderContents(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, async (err, files) => {
            if (err) return reject(err)
            const promises = files.map(f => getFileInfo(pathModule.join(path, f)))
            const output = await Promise.all(promises)
            return resolve(output)
        })
    })
}

async function getFolderSize(path) {
    const directChildren = await getFolderContents(path)
    const childFoldersSizesPromises = directChildren.filter(c => c.isDir).map(c => getFolderSize(c.name))
    const childFolderSizes = await Promise.all(childFoldersSizesPromises)
    const childFileSizes = directChildren.filter(c => !c.isDir).map(s => s.size)
    const reducer = (a, b) => a + b
    const totalSize = childFileSizes.reduce(reducer, 0) + childFolderSizes.reduce(reducer, 0)
    // console.log(path, filesizeModule(totalSize))
    return totalSize
}