type CartHeaderType = {
    cartData: { totalCount: number; totalPrice: number }
}

const CartHeader = ({ cartData }: CartHeaderType) => {
    return (
        <div>
            <div>{cartData.totalCount}</div>
            <div>${cartData.totalPrice}</div>
        </div>
    )
}

export default CartHeader
