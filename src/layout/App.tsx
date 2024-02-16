import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

type Props = {}

type ProductsInCartType = { [id: number]: number }

// type CartDataType = {
//     totalCount: number
//     totalPrice: number
// }

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
    })


    // const [cartData, setCartData] = useState<CartDataType>({
    //     totalCount: 0,
    //     totalPrice: 0,
    // })

    // const addProductToCart = (count: number, price: number) => {
    //     setCartData((prevState) => ({
    //         totalCount: prevState.totalCount + count,
    //         totalPrice: prevState.totalPrice + count * price,
    //     }))
    // }

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

//     const addProductToCart = (count: number, price: number) => {
//         setCartData((prevState) => ({
//             totalCount: prevState.totalCount + count,
//             totalPrice: prevState.totalPrice + count * price,
//         }))
//     }
//     console.log(addProductToCart)
    // цей console.log не потрібен, я його прописав щоб netlify не скаржився


    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            {/* <button onClick={() => addProductToCart(2, 5)}>
                Add to cart(id:2,count:5)
            </button> */}
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
