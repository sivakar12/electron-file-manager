import Mousetrap from 'mousetrap'
import actionTypes from './actions/actionTypes'

export default function(dispatch) {
    Mousetrap.bind('ctrl+c', function() {
        dispatch({ type: actionTypes.CTRL_C })
    })
    Mousetrap.bind('ctrl+x', function() {
        dispatch({ type: actionTypes.CTRL_X })
    })
    Mousetrap.bind('ctrl+v', function() {
        dispatch({ type: actionTypes.CTRL_P })
    })
}