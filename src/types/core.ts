import { Stats } from 'fs'

export type Path = string

export interface FavoriteItem {
    path: Path;
    name?: string;
}

export interface ContentItem {
    name: string;
    path: Path;
    isDirectory: boolean,
    isSymLink: boolean,
    size: number;
}

export interface TransferItem {
    path: Path,
    cut: boolean,
    totalBytes?: number,
    bytesDone?: number,
    started: boolean,
    complete: boolean
}