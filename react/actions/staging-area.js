import actionTypes from './actionTypes'

export function copyToStagingArea(path) {
    return {
        type: actionTypes.COPY_TO_STAGING_AREA,
        payload: { path }
    }
}

export function cutToStagingArea(path) {
    return {
        type: actionTypes.CUT_TO_STAGING_AREA,
        payload: { path }
    }
}

export function removeFromStagingArea(path) {
    return {
        type: actionTypes.REMOVE_FROM_STAGING_AREA,
        payload: { path }
    }
}

export function pasteFromStagingArea(path) {
    return {
        type: actionTypes.PASTE_FROM_STAGING_AREA,
        payload: { path }
    }
}

export function transferComplete(path) {
    return {
        type: actionTypes.TRANSFER_COMPLETE,
        payload: { path }
    }
}