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

const Header = (props: HeaderType) => {
    return (
        <h1
            style={{
                backgroundColor: props.bgColor,
                color: props.test ? 'white' : 'black',
                padding: '10px',
            }}
        >
            Hello {props.title} {props.num}
        </h1>
    )
}
// виводимо відповідне значення props

export default Header
// експортуємо компонент Header
