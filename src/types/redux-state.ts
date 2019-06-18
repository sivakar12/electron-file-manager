import {
    ContentItem,
    FavoriteItem,
    Path,
    TransferItem
} from './core'

export interface TabsState {
    current: number,
    tabs: string[]
}

export type ContentsState = ContentItem[]

export type FavoritesState = FavoriteItem[]

export type ViewState = {
    properties: boolean,
    favorites: boolean
}

export type SelectionState = null | Path

export type TransfersState = { [path: string]: TransferItem }