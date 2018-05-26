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

export function removeFromStagingArea(index) {
    return {
        type: actionTypes.REMOVE_FROM_STAGING_AREA,
        payload: { index }
    }
}

export function pasteFromStagingArea(path) {
    return {
        type: actionTypes.PASTE_FROM_STAGING_AREA,
        payload: { path }
    }
}

export function transferComplete(index) {
    return {
        type: actionTypes.TRANSFER_COMPLETE,
        payload: { index }
    }
}

export function deleteComplete() {
    return {
        type: actionTypes.DELETE_COMPLETE
    }
}

export function removeCompletedTransfers() {
    return {
        type: actionTypes.REMOVE_COMPLETED_TRANSFERS
    }
}