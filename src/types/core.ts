import { Stats } from 'fs'

export type Path = string

export interface FavoriteItem {
    path: string;
    name?: string;
}

export interface ContentItem {
    name: string;
    path: string;
    stats: Stats;
}