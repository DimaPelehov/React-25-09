import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// const el = React.createElement('h1', { id: 'title' }, 'Hello React')
// це застарілий спосіб, без jsx(розширений js)

const a = 10
const el = <h1 id="title">Hello React, {a}</h1>
// цей спосіб прописано з jsx
root.render(<React.StrictMode>{el}</React.StrictMode>)
