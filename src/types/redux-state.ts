import {
    ContentItem,
    FavoriteItem,
    Path,
    TransferItem,
    ViewType,
    PropertiesItem
} from './core'

export interface TabsState {
    current: number,
    tabs: Path[]
}

export type FavoritesState = FavoriteItem[]

export type ViewState = {
    properties: boolean,
    favorites: boolean,
    view: ViewType
}

export type SelectionState = Path | null

export type PropertiesState = {
    properties?: PropertiesItem,
    folderSize?: number,
    loadingFolderSize?: boolean,
    folderSizeTimeout?: boolean
}

export type TransfersState = { [path: string]: TransferItem }