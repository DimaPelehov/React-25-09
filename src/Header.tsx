// import  './Header.scss'
// імпортуємо css або scss
import classes from './Header.module.scss'
// або clases(module)

import clsx from 'clsx'
// імпортуємо бібліотеку clsx(працює з сss/scss, з module- ні)

// type HeaderType = {
//     title: string
//     num?: number
// ? означає,що параметр опційний
//     bgColor: string
//     test?: boolean
// }
// визначаєто тип props

// interface IHeaderType {
//     title: string
// }
// interface можна унаслідувати. Їх використовують,коли є складна логіка
// В назві інтерфейсу ставлять першу літеру І

// --------------------------Варіант 1 підключення стилів -(style)----------------
// const Header = ({ title, num, bgColor, test }: HeaderType) => {
//     const style = {
//         backgroundColor: bgColor,
//         color: test ? 'white' : 'black',
//         padding: '10px',
//     }

//     return (
//         <h1 style={style}>
//             Hello {title} {num}
//         </h1>
//     )
// }
// виводимо відповіднi значення props

// --------------------------Варіант 2 підключення стилів-(css, clsx)----------------------
type HeaderType = {
    title: string
    num?: number
}

const Header = ({ title, num }: HeaderType) => {
    return (
        // <h1 className="title">
        //     Hello {title} {num}
        // </h1>

        // підключаємо бібліотеку clsx для мультикласовості
        // клас redBg підключиться лише тоді, коли num === 47
        // <h1 className={clsx('title', { redBg: num === 47 })}>
        //     Hello {title} {num}
        // </h1>
        // аналогічна дія без clsx : <h1 className={`title ${num===47?'redBg':' '}`}>

        // використання css module
        <h1 className={classes.title}>
            Hello {title} {num}
        </h1>
    )
}

export default Header
// експортуємо компонент Header
