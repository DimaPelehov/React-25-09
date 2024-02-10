import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
// import IconButton from '@mui/material/IconButton'
// import MenuIcon from '@mui/icons-material/Menu'
// це треба видалити,оскільки замість цього ми вставили логотип
import Container from '@mui/material/Container'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import CartHeader from 'components/CartHeader/CartHeader'

type HeaderType = { productsInCart: { [id: number]: number } }

const Header = ({ productsInCart }: HeaderType) => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'green',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar>
                    <Logo />
                    <Menu />

                    <CartHeader productsInCart={productsInCart} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
