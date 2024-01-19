import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.css'
import { Component } from 'react'

type ProductListItemType = {
    title: string
    description: string
    type?: string
    capacity: number
    price: number
    image: string
}

// опишемо state
type State = { count: number; color: string }

// замінюємо функцію ProductListItem на class ProductListItem
class ProductListItem extends Component<ProductListItemType, State> {
    // описуємо state і тут
    state = {
        count: 1,
        color: 'green',
    }

    // Реалізація роботи лічильника(за допомогою функцій onIncrementClick і onDecrementClick)
    onIncrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
        // setState-спеціальна функція,котра повертає новий state,адже його не можна просто змінити,бо state-об'єкт
    }

    onDecrementClick() {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }))
    }

    // зміна кольору
    changeColor = () => {
        this.setState((prevState) => ({
            color: prevState.color === 'green' ? 'red' : 'green',
        }))
    }

    render() {
        // робимо деструктуризацію
        const {
            title,
            description,
            type = 'No type',
            // якщо в productArray.ts не буде зазначено type, то він пропишеться за замовчуванням
            capacity,
            price,
            image,
        } = this.props
        return (
            <Card className="product-list-item" variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt={title} />
                    </div>
                    <h2 className="product-title">{title}</h2>
                    <p className="product-description">{description}</p>
                    <div className="product-features">Type:{type}</div>
                    <div className="product-features">
                        Capacity:{capacity} Gb
                    </div>
                    <div>
                        Color:
                        <span className={`${this.state.color}`}>
                            {this.state.color}
                        </span>
                    </div>
                    <button onClick={this.changeColor}>Change color</button>
                    <div className="product-price">$ {price}</div>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={() => this.onDecrementClick()}
                        >
                            -
                        </Button>
                        <TextField
                            size="small"
                            value={this.state.count}
                            // підключили сюди значення count
                        ></TextField>
                        <Button
                            variant="outlined"
                            onClick={this.onIncrementClick}
                            // підключили onIncrementClick на клік мишкою
                        >
                            +
                        </Button>
                    </div>

                    <div className="btns-wrap">
                        <Button variant="outlined">Add to cart</Button>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

// ЦЕ ПРИКЛАД ФУНКЦІОНАЛЬНОГО КОМПОНЕНТА
// const ProductListItem = ({
//     title,
//     description,
//     type = 'phone',
//     // якщо в ProductList.tsx не буде зазначено type, то він пропишеться за замовчуванням
//     capacity,
//     price,
//     image,
// }: ProductListItemType) => {
//     return (
//         <Card className="product-list-item" variant="outlined">
//             <CardContent>
//                 <div className="product-img">
//                     <img src={image} alt={title} />
//                 </div>
//                 <h2 className="product-title">{title}</h2>
//                 <p className="product-description">{description}</p>
//                 <div className="product-features">Type:{type}</div>
//                 <div className="product-features">Capacity:{capacity} Gb</div>
//                 <div className="product-price">$ {price}</div>
//                 <div className="product-quantity">
//                     <Button variant="outlined">-</Button>
//                     <TextField size="small" value={1}></TextField>
//                     <Button variant="outlined">+</Button>
//                 </div>

//                 <div className="btns-wrap">
//                     <Button variant="outlined">Add to cart</Button>
//                 </div>
//             </CardContent>
//         </Card>
//     )
// }

export default ProductListItem
