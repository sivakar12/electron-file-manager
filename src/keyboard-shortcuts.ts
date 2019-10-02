import { StoreType } from "./App";
import { 
    CLOSE_TAB,
    NEW_TAB,
    NEXT_TAB,
    PREVIOUS_TAB,
    TOGGLE_FAVORITES,
    TOGGLE_PROPERTIES,
    AllActions
} from "./types/redux-actions";
import _ from 'lodash'

type KeyboardMapping = {
    combo(e: KeyboardEvent): boolean;
    action: AllActions
}
const mappings: KeyboardMapping[] = [
    {
        combo: e => e.ctrlKey && e.key === 'w',
        action: {
            type: CLOSE_TAB,
            payload: {}
        }
    },
    {
        combo: e => e.ctrlKey && e.key === 't',
        action: {
            type: NEW_TAB,
            payload: {}
        }
    },
    {
        combo: e => e.ctrlKey && !e.shiftKey && e.key === 'Tab',
        action: {
            type: NEXT_TAB
        }
    },
    {
        combo: e => e.ctrlKey && e.shiftKey && e.key === 'Tab',
        action: {
            type: PREVIOUS_TAB
        }
    },
    {
        combo: e => e.ctrlKey && e.key === 'f',
        action: {
            type: TOGGLE_FAVORITES
        }
    },
    {
        combo: e => e.ctrlKey && e.key === 'p',
        action: {
            type: TOGGLE_PROPERTIES
        }
    }
]

export const addKeyboardShortcuts = (store: StoreType) => {
    document.body.addEventListener('keydown', event => {
        const action = _.find(mappings, m => m.combo(event)).action
        store.dispatch(action)
    })
}