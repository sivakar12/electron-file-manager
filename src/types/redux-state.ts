import {
    ContentItem,
    FavoriteItem,
    Path,
    TransferItem
} from './core'
import Immutable from 'immutable'
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

export type TransfersState = Immutable.Map<Path, TransferItem>