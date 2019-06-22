import { Stats } from 'fs'

export type Path = string

export interface FavoriteItem {
    path: Path;
    name?: string;
}

export interface ContentItem {
    name: string;
    path: Path;
    isDirectory?: boolean,
    isSymLink?: boolean,
    size?: number;
    errorAccessing?: boolean
}

export type TransferItemState = 'added' | 'started' | 'finished' | 'error'

export interface TransferItem {
    path: Path,
    type: 'cut' | 'copy' | 'delete',
    totalBytes?: number,
    bytesDone?: number,
    state: TransferItemState
}

export interface PropertiesItem {
    name: string,
    fullPath: Path,
    size: number,
    isDirectory: boolean,
    isSymLink: boolean,
    mode: number,
    lastAccessTime: number,
    lastModifiedTime: number,
    createdTime: number
}

export type ViewType = 'grid' | 'column' | 'list'