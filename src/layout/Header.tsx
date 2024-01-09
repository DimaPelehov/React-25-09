import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
// import IconButton from '@mui/material/IconButton'
// import MenuIcon from '@mui/icons-material/Menu'
// це треба видалити,оскільки замість цього ми вставили логотип
import Container from '@mui/material/Container'
import Logo from 'components/Logo/Logo'

type Props = {}

const Header = (props: Props) => {
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
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
