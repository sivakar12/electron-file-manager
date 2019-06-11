import { string } from "prop-types";

// Redux states
export interface TabsState {
    current: number,
    tabs: string[]
}

export type ContentsState = ContentItem[]

export type FavoritesState = FavoriteItem[]


export interface FavoriteItem {
    path: string;
    name?: string;
}
export interface ContentItem {
    name: string;
}