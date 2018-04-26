import actionTypes from './actionTypes'

export const minimizeWindow = () => ({
    type: actionTypes.MINIMIZE_WINDOW
})

export const toggleMaximizeWindow = () => ({
    type: actionTypes.TOGGLE_MAXIMIZE_WINDOW
})

export const closeWindow = () => ({
    type: actionTypes.CLOSE_WINDOW
})