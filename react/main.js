import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const appNode = document.createElement('div')
appNode.setAttribute('id', 'app')
const body = document.getElementsByTagName('body')[0]
body.appendChild(appNode)

ReactDOM.render(<App/>, document.getElementById('app'))