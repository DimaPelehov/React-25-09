import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// const el = React.createElement('h1', { id: 'title' }, 'Hello React')
// це застарілий спосіб, без jsx(розширений js)

// const a = 10
// const el = <h1 id="title">Hello React, {a}</h1>
// цей спосіб прописано з jsx

// const el = (
//     <div>
//         <h1>Hello first div</h1>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
//             perferendis unde modi nostrum assumenda culpa distinctio ducimus ab
//             optio. Excepturi exercitationem laudantium iusto obcaecati pariatur?
//             Neque quas earum id est.
//         </p>
//         <p>It`s 2 paragraph</p>
//     </div>
// )

// Для el ми повинні між <React.StrictMode>(внизу) прописувати {el}

const App = () => {
    return (
        <div>
            <h1>Hello second div in function App</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti perferendis unde modi nostrum assumenda culpa
                distinctio ducimus ab optio. Excepturi exercitationem laudantium
                iusto obcaecati pariatur? Neque quas earum id est.
            </p>
            <p>It`s 2 paragraph in App</p>
        </div>
    )
}
//  App-arrow function - це компонент

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
