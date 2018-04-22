import React from 'react'
import { connect } from 'react-redux'
import { addFavorite } from '../actions'

const Favorites = props => (
    <div>
        <h2>Favorites</h2>
        <pre>{JSON.stringify(props.favorites)}</pre>
    </div>
)

const mapStateToProps = state => ({ favorites: state.favorites })

export default connect(mapStateToProps)(Favorites)