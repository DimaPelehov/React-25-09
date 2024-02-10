type CartHeaderType = {
    productsInCart: { [id: number]: number }
}

const CartHeader = ({ productsInCart }: CartHeaderType) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productId}:{productsInCart[+productId]}
                </div>
            ))}
        </div>
    )
}

export default CartHeader
