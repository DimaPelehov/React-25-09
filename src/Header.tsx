type HeaderType = {
    title: string
    num?: number
    // ? означає,що параметр опційний
    bgColor: string
    test?: boolean
}
// визначаєто тип props

// interface IHeaderType {
//     title: string
// }
// interface можна унаслідувати. Їх використовують,коли є складна логіка
// В назві інтерфейсу ставлять першу літеру І

const Header = ({ title, num, bgColor, test }: HeaderType) => {
    const style = {
        backgroundColor: bgColor,
        color: test ? 'white' : 'black',
        padding: '10px',
    }

    return (
        <h1 style={style}>
            Hello {title} {num}
        </h1>
    )
}
// виводимо відповіднi значення props

export default Header
// експортуємо компонент Header
