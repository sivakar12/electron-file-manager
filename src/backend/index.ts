import fs from 'fs'
import os from 'os'
import { ContentItem } from '../types/core'

const fsPromise = fs.promises

export function getHomeDirectory():string {
    return os.homedir()
}

export function getFolderContents(path: string): ContentItem[] {
    const files = fs.readdirSync(path)
    const fileDetails = files.map(f => ({ name: f }))
    return fileDetails
}