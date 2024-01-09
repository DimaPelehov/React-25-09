import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
// імпортуємо компонент Header з файлу Header.tsx
import Content from './Content'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// const el = React.createElement('h1', { id: 'title' }, 'Hello React')
// це застарілий спосіб, без jsx(розширений js)
// ----------------------------------------------------------------------

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
// ---------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------

// const Content = () => {
//     return (
//         <React.Fragment>
//             <p>It`s paragraphs create in component Content in component Test</p>
//             <p>It`s 2 paragraph in component Content.</p>
//         </React.Fragment>
//         // React.Fragment потрібен для того, щоб не створювався додатковий div
//     )
// }
// цей Content можна видалити,оскільки під нього створено окремий файл tsx

const Test = () => {
    return (
        <>
            <Header
                text="imported component Header in component Test"
                num={47}
                // bgColor="blue"
                // test
                // ці два рядки працюють при 1 варіанті підключення стилів
            />
            <Header
                text="це я перевикористав Header з іншим title"
                // bgColor="green"
                // це для 1 варіанта підключення стилів
            />
            <Content
                textOne="It`s paragraphs create in component Content in component Test"
                textTwo="It`s 2 paragraph in component Content."
                bgColor="purple"
            />
            <Content
                textOne="It`s 3 paragraphs create in component Content in component Test"
                textTwo="It`s 4 paragraph in component Content."
                bgColor="red"
            />
            <Content
                textOne="It`s 5 paragraphs create in component Content in component Test"
                textTwo="It`s 6 paragraph in component Content."
                // тут ми не задали bgColor, бо це опційний? параметр
            />
        </>
        // <> пишуться для того, щоб не створювався додатковий div
        // оскільки num ?- опційний параметр, ми можемо вказувати його тільки там, де нам потрібно
    )
}

root.render(
    <React.StrictMode>
        <Test />
    </React.StrictMode>
)
