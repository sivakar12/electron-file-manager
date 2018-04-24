import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addFavorite, changePath } from '../actions'
import { FavoriteItem, FavoritesPanel } from '../components'

const Favorites = props => (
    <div>
        <FavoritesPanel onAddFavorite={() =>{
            props.addFavorite(props.currentPath) }}>
            {Object.values(props.favorites).map(f => (
                <FavoriteItem name={f.name} key={f.path}
                    onClick={() => props.changePath(f.path)}/>
            ))}
        </FavoritesPanel>
    </div>
)

const mapStateToProps = state => ({ 
    favorites: state.favorites,
    currentPath: state.tabs.tabs[state.tabs.current]
})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changePath, addFavorite }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Favorites)