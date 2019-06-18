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

function createKeyboardEventChannel() {
    return eventChannel(emitter => {
        // const keyCombination = 'ctrl+x ctrl+c ctrl+v'
        // Mousetrap.bind(keyCombination, function(e, combo) {
        //     emitter(combo)
        // })
        // return () => {
        //     Mousetrap.unbind(keyCombination)
        // }
        const keyHandler = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key == 'x')
            emitter('ctrl+x')
            if (e.ctrlKey && e.key == 'c')
            emitter('ctrl+c')
            if (e.ctrlKey && e.key == 'v') 
            emitter('ctrl+v')
        } 
        
        document.body.addEventListener('keydown', keyHandler)
        
        return () => {
            document.body.removeEventListener('keydown', keyHandler)
        }
    })
}

export function* handleKeyboardEvents() {
    console.log('Listening to keyboard')
    const keyComboChannel = yield call(createKeyboardEventChannel)
    console.log(keyComboChannel)
    while (true) {
        const combo = yield take(keyComboChannel)
        console.log(combo)
        let action: CopyToStagingAreaAction | CutToStagingAreaAction | PasteFromStagingAreaAction
        switch (combo) {
            case 'ctrl+c':
                action = {
                    type: COPY_TO_STAGING_AREA,
                    payload: { path: yield getSelectedItem()}
                }
                yield put(action)
                break
            case 'ctrl+x':
                action = {
                    type: CUT_TO_STAGING_AREA,
                    payload: { path: yield getSelectedItem() }
                }
                yield put(action)
                break
            case 'ctrl+v': 
                action = {
                    type: PASTE_FROM_STAGING_AREA 
                }
                yield put(action)
        }
    }
}