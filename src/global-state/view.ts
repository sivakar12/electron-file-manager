import { ViewType } from "../types/core";

export type ViewState = {
    properties: boolean,
    favorites: boolean,
    view: ViewType
}

export const defaultState: ViewState = {
    properties: false,
    favorites: false,
    view: 'grid'
}