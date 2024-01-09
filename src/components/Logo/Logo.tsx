import Typography from '@mui/material/Typography'
import logo from 'assets/RozetkaLogo.svg'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Rozetka Logo" />
        </Typography>
    )
}

export default Logo
