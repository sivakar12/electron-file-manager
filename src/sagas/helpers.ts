import { select, take, call } from 'redux-saga/effects'
import { AppState } from '../reducers';
import { Observable } from 'rxjs';
import { eventChannel, END, } from 'redux-saga'

export function* getCurrentPath() {
    const state: AppState = yield select()
    return state.tabs.tabs[state.tabs.current]
}

export function* getSelectedItem() {
    const state: AppState = yield select()
    return state.selection.path
}

export function* channelFromObservable<T>(
    observable: Observable<T>, 
    onNext: any,
    onError: any,
    onComplete: any
) {
    const channel = yield eventChannel(emitter => {
        observable.subscribe(
            (data) => emitter({ type: 'data', payload: data }),
            (error) => emitter({ type: 'error', payload: error }),
            () => emitter(END) 
        )
        return () => {}
    })

    try {
        while(true) {
            let data = yield take(channel)
            if (data.type === 'data') {
                yield call(onNext, data.payload)
            }
            else if (data.type === 'error')
                yield call(onError, data.payload)
        }
    } finally {
        yield call(onComplete)
    }

}