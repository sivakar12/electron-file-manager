import Mousetrap from 'mousetrap'
import actionTypes from './actions/actionTypes'
import { goToParentFolder } from './actions'
export default function(dispatch) {
    Mousetrap.bind('ctrl+c', function() {
        dispatch({ type: actionTypes.CTRL_C })
    })
    Mousetrap.bind('ctrl+x', function() {
        dispatch({ type: actionTypes.CTRL_X })
    })
    Mousetrap.bind('ctrl+v', function() {
        dispatch({ type: actionTypes.CTRL_V })
    })
    Mousetrap.bind('del', function() {
        dispatch({ type: actionTypes.DELETE })
    })
    Mousetrap.bind('ctrl+tab', function() {
        dispatch({ type: actionTypes.NEXT_TAB })
    })
    Mousetrap.bind('ctrl+shift+tab', function() {
        dispatch({ type: actionTypes.PREVIOUS_TAB })
    })
    Mousetrap.bind('ctrl+t', function() {
        dispatch({ type: actionTypes.NEW_TAB })
    })
    Mousetrap.bind('ctrl+w', function() { // will work after removing electron's shortcut
        dispatch({ type: actionTypes.CLOSE_TAB })
    })
    Mousetrap.bind('backspace', () => {
        dispatch(goToParentFolder())
    })
    Mousetrap.bind('ctrl+b', function() {
        dispatch({ type: actionTypes.TOGGLE_FAVORITES })
    })
    Mousetrap.bind('alt+enter', function() {
        dispatch({ type: actionTypes.TOGGLE_PROPERTIES })
    })
}