import {
    Path,
    ContentItem,
    FavoriteItem
} from './core'

export const CHANGE_PATH = 'CHANGE_PATH'
interface ChangePathAction {
    type: typeof CHANGE_PATH,
    payload: { path: Path }
}

export const SET_CONTENTS = 'SET_CONTENTS'
interface SetContentsAction {
    type: typeof SET_CONTENTS,
    payload: { contents: ContentItem[] }
}

export const GO_TO_PARENT_FOLDER = 'GO_TO_PARENT_FOLDER'
interface GoToParentFolderAction {
    type: typeof GO_TO_PARENT_FOLDER
}

export const OPEN_FOLDER = 'OPEN_FOLDER'
interface OpenFolderAction {
    type: typeof OPEN_FOLDER,
    payload: { path: Path }
}

export const OPEN_FILE = 'OPEN_FILE'
interface OpenFileAction {
    type: typeof OPEN_FILE,
    payload: { path: Path }
}

export const SELECT_ITEM = 'SELECT_ITEM'
interface SelectItemAction {
    type: typeof SELECT_ITEM,
    payload: { path: Path }
}

export const CLEAR_SELECTION = 'CLEAR_SELECTION'
interface ClearSelectionAction {
    type: typeof CLEAR_SELECTION
}


export const ADD_FAVORITE = 'ADD_FAVORITE'
interface AddFavoriteAction {
    type: typeof ADD_FAVORITE,
    payload: { path: Path }
}

export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
interface RemoveFavoriteAction {
    type: typeof REMOVE_FAVORITE,
    payload: { index: number }
}

export const RENAME_FAVORITE = 'RENAME_FAVORITE'
interface RenameFavoriteAction {
    type: typeof RENAME_FAVORITE,
    payload: { index: number, newName: string }
}


export const SWITCH_TAB = 'SWITCH_TAB'
interface SwitchTabAction {
    type: typeof SWITCH_TAB,
    payload: { index: number }
}

export const CLOSE_TAB = 'CLOSE_TAB'
interface CloseTabAction {
    type: typeof CLOSE_TAB,
    payload: { index: number }
}

export const NEW_TAB = 'NEW_TAB'
interface NewTabAction {
    type: typeof NEW_TAB,
    payload: { path?: Path }
}

export const NEXT_TAB = 'NEXT_TAB'
interface NextTabAction {
    type: typeof NEXT_TAB
}

export const PREVIOUS_TAB = 'PREVIOUS_TAB'
interface PreviousTabAction {
    type: typeof PREVIOUS_TAB
}


export const MINIMIZE_WINDOW = 'MINIMIZE_WINDOW'
interface MinimizeWindowAction {
    type: typeof MINIMIZE_WINDOW
}

export const TOGGLE_MAXIMIZE_WINDOW = 'TOGGLE_MAXIMIZE_WINDOW'
interface ToggleMaximizeWindowAction {
    type: typeof TOGGLE_MAXIMIZE_WINDOW
}

export const CLOSE_WINDOW = 'CLOSE_WINDOW'
interface CloseWindowAction {
    type: typeof CLOSE_WINDOW
}


export const COPY_TO_STAGING_AREA = 'COPY_TO_STAGING_AREA'
interface CopyToStagingAreaAction {
    type: typeof COPY_TO_STAGING_AREA,
    payload: { path: Path }
}

export const CUT_TO_STAGING_AREA = 'CUT_TO_STAGING_AREA'
interface CutToStagingAreaAction {
    type: typeof CUT_TO_STAGING_AREA,
    payload: { path: Path }
}

export const REMOVE_FROM_STAGING_AREA = 'REMOVE_FROM_STAGING_AREA'
interface RemoveFromStagingAreaAction {
    type: typeof REMOVE_FROM_STAGING_AREA,
    payload: { path: Path }
}

export const PASTE_FROM_STAGING_AREA = 'PASTE_FROM_STAGING_AREA'
interface PasteFromStagingAreaAction {
    type: typeof PASTE_FROM_STAGING_AREA
}


export const TOGGLE_PROPERTIES = 'TOGGLE_PROPERTIES'
interface TogglePropertiesAction {
    type: typeof TOGGLE_PROPERTIES
}

export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES'
interface ToggleFavoritesAction {
    type: typeof TOGGLE_FAVORITES
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

export type ViewActions = ToggleFavoritesAction | TogglePropertiesAction
