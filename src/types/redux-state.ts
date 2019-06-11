import { ContentItem, FavoriteItem } from './core'

export interface TabsState {
    current: number,
    tabs: string[]
}

export type ContentsState = ContentItem[]

export type FavoritesState = FavoriteItem[]
