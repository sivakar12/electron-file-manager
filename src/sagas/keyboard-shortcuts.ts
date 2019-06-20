import { eventChannel } from 'redux-saga' 
import { take, put, call } from 'redux-saga/effects'

import { 
    COPY_TO_STAGING_AREA,
    CUT_TO_STAGING_AREA,
    PASTE_FROM_STAGING_AREA,
    CLOSE_TAB,
    NEW_TAB,
    NEXT_TAB,
    PREVIOUS_TAB,
    TOGGLE_FAVORITES,
    TOGGLE_PROPERTIES
} from '../types/redux-actions';
import { getCurrentPath, getSelectedItem } from './helpers'

type KeyboardMapping = {
    combo(e: KeyboardEvent): boolean;
    callback(): any
}
const mappings: KeyboardMapping[] = [
    {
        combo: e => e.ctrlKey && e.key === 'c',
        callback: function*() {
            const action = {
                type: COPY_TO_STAGING_AREA,
                payload: { path: yield getSelectedItem()}
            }
            yield put(action)
        }
    },
    {
        combo: e => e.ctrlKey && e.key === 'x',
        callback: function*() {
            const action = {
                type: CUT_TO_STAGING_AREA,
                payload: { path: yield getSelectedItem()}
            }
            yield put(action)
        }
    },
    {
        combo: e => e.ctrlKey && e.key === 'v',
        callback: function*() {
            const action = {
                type: PASTE_FROM_STAGING_AREA 
            }
            yield put(action)
        }
    },
    {
        combo: e => e.ctrlKey && e.key === 'w',
        callback: function*() {
            const action = {
                type: CLOSE_TAB
            }
            yield put(action)
        }
    },
    {
        combo: e => e.ctrlKey && e.key === 't',
        callback: function*() {
            const action = {
                type: NEW_TAB
            }
            yield put(action)
        }
    },
    {
        combo: e => e.ctrlKey && !e.shiftKey && e.key === 'Tab',
        callback: function*() {
            const action = {
                type: NEXT_TAB
            }
            yield put(action)
        }
    },
    {
        combo: e => e.ctrlKey && e.shiftKey && e.key === 'Tab',
        callback: function*() {
            const action = {
                type: PREVIOUS_TAB
            }
            yield put(action)
        }
    },
    {
        combo: e => e.ctrlKey && e.key === 'f',
        callback: function*() {
            const action = {
                type: TOGGLE_FAVORITES
            }
            yield put(action)
        }
    },
    {
        combo: e => e.ctrlKey && e.key === 'p',
        callback: function*() {
            const action = {
                type: TOGGLE_PROPERTIES
            }
            yield put(action)
        }
    }
]

function createKeyboardEventChannel() {
    return eventChannel(emitter => {
        const keyHandler = (e: KeyboardEvent) => emitter(e)
        
        document.body.addEventListener('keydown', keyHandler)
        
        return () => {
            document.body.removeEventListener('keydown', keyHandler)
        }
    })
}

export function* handleKeyboardEvents() {
    const keyboardEventChannel = yield call(createKeyboardEventChannel)
    while (true) {
        const event = yield take(keyboardEventChannel)
        console.log(event)
        for (let mapping of mappings) {
            if (mapping.combo(event)) {
                event.preventDefault()
                yield mapping.callback()
                break
            }
        }
    }
}