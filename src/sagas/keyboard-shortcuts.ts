import { eventChannel } from 'redux-saga' 
import { take, put, call } from 'redux-saga/effects'

import { 
    COPY_TO_STAGING_AREA, 
    CopyToStagingAreaAction, 
    CutToStagingAreaAction, 
    PasteFromStagingAreaAction,
    CUT_TO_STAGING_AREA,
    PASTE_FROM_STAGING_AREA
} from '../types/redux-actions';
import { getCurrentPath, getSelectedItem } from './helpers'

type KeyboardMapping = {
    combo(e: KeyboardEvent): boolean;
    callback(): any
}
const mappings: KeyboardMapping[] = [
    {
        combo: (e) => e.ctrlKey && e.key === 'c',
        callback: function*() {
            const action = {
                type: COPY_TO_STAGING_AREA,
                payload: { path: yield getSelectedItem()}
            }
            yield put(action)
        }
    },
    {
        combo: (e) => e.ctrlKey && e.key === 'x',
        callback: function*() {
            const action = {
                type: CUT_TO_STAGING_AREA,
                payload: { path: yield getSelectedItem()}
            }
            yield put(action)
        }
    },
    {
        combo: (e) => e.ctrlKey && e.key === 'v',
        callback: function*() {
            const action = {
                type: PASTE_FROM_STAGING_AREA 
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
                yield mapping.callback()
                break
            }
        }
    }
}