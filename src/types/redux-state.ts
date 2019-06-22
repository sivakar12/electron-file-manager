import {
    ContentItem,
    FavoriteItem,
    Path,
    TransferItem,
    ViewType
} from './core'

export interface TabsState {
    current: number,
    tabs: Path[]
}

export type ContentsState = ContentItem[]

export type FavoritesState = FavoriteItem[]

export type ViewState = {
    properties: boolean,
    favorites: boolean,
    view: ViewType
}

export type SelectionState = null | Path

export type TransfersState = { [path: string]: TransferItem }