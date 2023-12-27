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

// const App = () => {
//     return (
//         <div>
//             <h1>Hello second div in function App, {getNumber()}</h1>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Corrupti perferendis unde modi nostrum assumenda culpa
//                 distinctio ducimus ab optio. Excepturi exercitationem laudantium
//                 iusto obcaecati pariatur? Neque quas earum id est.
//             </p>
//             <p>It`s 2 paragraph in App</p>
//         </div>
//     )
// }
// App-arrow function - це компонент,його задача- повернути зовнішній вигляд.
// App викликається між <React.StrictMode>(внизу) як <тег/>

// function getNumber() {
//     let a = 10
//     return a
// }
// а це звичайна функція

const Test = () => {
    return (
        <>
            <Header />
            <Content />
        </>
        // <> пишуться для того, щоб не створювався додатковий div
    )
}

const Header = () => {
    return <h1>Hello component Header in component Test</h1>
}
const Content = () => {
    return (
        <React.Fragment>
            <p>It`s paragraphs create in component Content in component Test</p>
            <p>It`s 2 paragraph in component Content.</p>
        </React.Fragment>
        // React.Fragment потрібен для того, щоб не створювався додатковий div
    )
}

root.render(
    <React.StrictMode>
        <Test />
    </React.StrictMode>
)
