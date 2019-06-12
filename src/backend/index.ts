import fs from 'fs'
import os from 'os'
import pathModule from 'path'
import _ from 'lodash'

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
    const fileDetails = _.range(0, files.length).map(i => ({
        name: files[i],
        path: filePaths[i],
        stats: fileStats[i]
    }))
    return fileDetails
}