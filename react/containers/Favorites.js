import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addFavorite, changePath } from '../actions'
import { FavoriteItem } from '../components'
const Favorites = props => (
    <div>
        <h2>Favorites</h2>
        {Object.values(props.favorites).map(f => (
            <FavoriteItem name={f.name} key={f.path}
                onClick={() => props.changePath(f.path)}/>
        ))}
    </div>
)

const mapStateToProps = state => ({ favorites: state.favorites })
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changePath }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Favorites)