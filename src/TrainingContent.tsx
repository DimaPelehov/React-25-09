import './TrainingContent.css'

type ContentType = {
    textOne: string
    textTwo: string
    bgColor?: string
}

const TrainingContent = ({
    textOne,
    textTwo,
    bgColor = 'yellow',
}: ContentType) => {
    // якщо ми не задамо в index.tsx значення bgColor, то воно буде yellow за замовчуванням

    // 1 варіант задання стилів
    // const style = {
    //     backgroundColor: bgColor,
    // }

    return (
        // <div style={style}>

        // 2 варіант задання стилів, підключаємо класи
        <div className={bgColor}>
            <p>{textOne}</p>
            <p>{textTwo}</p>
        </div>
        // ми використовуємо div, оскільки нам потрібен фон не параграфу, а Content вцілому
    )
}

export default TrainingContent
