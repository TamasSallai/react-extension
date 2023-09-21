import React from 'react'
import ReactDOM from 'react-dom/client'

const PopUp = <div>Hello World</div>

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.createRoot(root).render(PopUp)
