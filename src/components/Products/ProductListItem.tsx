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

// замінюємо функцію ProductListItem на class ProductListItem
class ProductListItem extends Component<ProductListItemType> {
    render() {
        return (
            <Card className="product-list-item" variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={this.props.image} alt={this.props.title} />
                    </div>
                    <h2 className="product-title">{this.props.title}</h2>
                    <p className="product-description">
                        {this.props.description}
                    </p>
                    <div className="product-features">
                        Type:{this.props.type}
                    </div>
                    <div className="product-features">
                        Capacity:{this.props.capacity} Gb
                    </div>
                    <div className="product-price">$ {this.props.price}</div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField size="small" value={1}></TextField>
                        <Button variant="outlined">+</Button>
                    </div>

                    <div className="btns-wrap">
                        <Button variant="outlined">Add to cart</Button>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

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
