import React from 'react'
import ReactDOM from 'react-dom/client'
import './Popup.css'

const PopUp = () => {
  return <div>Hello World</div>
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.createRoot(root).render(<PopUp />)
