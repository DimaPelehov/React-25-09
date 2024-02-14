import { productsArray } from 'utils/productsArray'

type CartHeaderType = {
    productsInCart: { [id: number]: number }
}

const CartHeader = ({ productsInCart }: CartHeaderType) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsArray[+productId - 1].title}:
                    {productsInCart[+productId]}
                </div>
            ))}
        </div>
    )
}

export default CartHeader
