import {
    Path,
    ContentItem,
    TransferItemState,
    ViewType,
    PropertiesItem,
} from './core'

export const CHANGE_PATH = 'CHANGE_PATH'
export interface ChangePathAction {
    type: typeof CHANGE_PATH,
    payload: { path: Path }
}

export const LOAD_CONTENTS = 'LOAD_CONTENTS'
export interface LoadContentsAction {
    type: typeof LOAD_CONTENTS
}

export const SET_CONTENTS = 'SET_CONTENTS'
export interface SetContentsAction {
    type: typeof SET_CONTENTS,
    payload: { contents: ContentItem[] }
}

export const GO_TO_PARENT_FOLDER = 'GO_TO_PARENT_FOLDER'
export interface GoToParentFolderAction {
    type: typeof GO_TO_PARENT_FOLDER
}

export const OPEN_FOLDER = 'OPEN_FOLDER'
export interface OpenFolderAction {
    type: typeof OPEN_FOLDER,
    payload: { path: Path }
}

export const OPEN_FILE = 'OPEN_FILE'
export interface OpenFileAction {
    type: typeof OPEN_FILE,
    payload: { path: Path }
}

export const SELECT_ITEM = 'SELECT_ITEM'
export interface SelectItemAction {
    type: typeof SELECT_ITEM,
    payload: { path: Path }
}

export const CLEAR_SELECTION = 'CLEAR_SELECTION'
export interface ClearSelectionAction {
    type: typeof CLEAR_SELECTION
}


export const ADD_FAVORITE = 'ADD_FAVORITE'
export interface AddFavoriteAction {
    type: typeof ADD_FAVORITE,
    payload: { path: Path }
}

export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export interface RemoveFavoriteAction {
    type: typeof REMOVE_FAVORITE,
    payload: { index: number }
}

export const RENAME_FAVORITE = 'RENAME_FAVORITE'
export interface RenameFavoriteAction {
    type: typeof RENAME_FAVORITE,
    payload: { index: number, newName: string }
}


export const SWITCH_TAB = 'SWITCH_TAB'
export interface SwitchTabAction {
    type: typeof SWITCH_TAB,
    payload: { index: number }
}

export const CLOSE_TAB = 'CLOSE_TAB'
export interface CloseTabAction {
    type: typeof CLOSE_TAB,
    payload: { index: number }
}

export const NEW_TAB = 'NEW_TAB'
export interface NewTabAction {
    type: typeof NEW_TAB,
    payload: { path?: Path }
}

export const NEXT_TAB = 'NEXT_TAB'
export interface NextTabAction {
    type: typeof NEXT_TAB
}

export const PREVIOUS_TAB = 'PREVIOUS_TAB'
export interface PreviousTabAction {
    type: typeof PREVIOUS_TAB
}


export const MINIMIZE_WINDOW = 'MINIMIZE_WINDOW'
export interface MinimizeWindowAction {
    type: typeof MINIMIZE_WINDOW
}

export const TOGGLE_MAXIMIZE_WINDOW = 'TOGGLE_MAXIMIZE_WINDOW'
export interface ToggleMaximizeWindowAction {
    type: typeof TOGGLE_MAXIMIZE_WINDOW
}

export const CLOSE_WINDOW = 'CLOSE_WINDOW'
export interface CloseWindowAction {
    type: typeof CLOSE_WINDOW
}

export const COPY_TO_STAGING_AREA = 'COPY_TO_STAGING_AREA'
export interface CopyToStagingAreaAction {
    type: typeof COPY_TO_STAGING_AREA,
    payload: { path: Path }
}

export const CUT_TO_STAGING_AREA = 'CUT_TO_STAGING_AREA'
export interface CutToStagingAreaAction {
    type: typeof CUT_TO_STAGING_AREA,
    payload: { path: Path }
}

export const REMOVE_FROM_STAGING_AREA = 'REMOVE_FROM_STAGING_AREA'
export interface RemoveFromStagingAreaAction {
    type: typeof REMOVE_FROM_STAGING_AREA,
    payload: { path: Path }
}

export const PASTE_FROM_STAGING_AREA = 'PASTE_FROM_STAGING_AREA'
export interface PasteFromStagingAreaAction {
    type: typeof PASTE_FROM_STAGING_AREA
}

export const UPDATE_TRANSFER_PROGRESS = 'UPDATE_TRANSFER_PROGRESS'
export interface UpdateTransferProgressAction {
    type: typeof UPDATE_TRANSFER_PROGRESS,
    payload: {
        path: Path,
        totalBytes?: number,
        bytesDone?: number,
        state: TransferItemState
    }
}

export const TOGGLE_PROPERTIES = 'TOGGLE_PROPERTIES'
export interface TogglePropertiesAction {
    type: typeof TOGGLE_PROPERTIES
}

export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES'
export interface ToggleFavoritesAction {
    type: typeof TOGGLE_FAVORITES
}

export const CHANGE_VIEW = 'CHANGE_VIEW'
export interface ChangeViewAction {
    type: typeof CHANGE_VIEW,
    payload: {
        view: ViewType
    }
}

export const SET_PROPERTIES = 'SET_PROPERTIES'
export interface SetPropertiesAction {
    type: typeof SET_PROPERTIES,
    payload: {
        properties: PropertiesItem
    }
}
// Select actions supported by reducers
export type FavoritesActions = AddFavoriteAction
| RemoveFavoriteAction
| RenameFavoriteAction

export type TabActions = SwitchTabAction 
| NewTabAction
| CloseTabAction
| NextTabAction
| PreviousTabAction
| ChangePathAction
| OpenFolderAction
| GoToParentFolderAction

export type ContentActions = SetContentsAction
| OpenFolderAction | GoToParentFolderAction | ChangePathAction

export type ViewActions = ToggleFavoritesAction | TogglePropertiesAction | ChangeViewAction

export type SelectionActions = SelectItemAction | ClearSelectionAction |
    OpenFileAction | OpenFolderAction | GoToParentFolderAction | SetPropertiesAction 

export type TransferActions = CutToStagingAreaAction | CopyToStagingAreaAction |
    PasteFromStagingAreaAction | RemoveFromStagingAreaAction | UpdateTransferProgressAction