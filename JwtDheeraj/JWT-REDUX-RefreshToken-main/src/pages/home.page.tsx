import { Box, Container, Typography } from "@mui/material"
import { useAppSelector } from "../redux/store"
import { useLocation, useNavigate, withRouter } from "react-router-dom";

const HomePage = () => {



    const loginButton = withRouter(({ history }) => (
        <button
            type='button'
            onClick={() => { history.push('/login.page') }}
        >
            Log In
        </button>
    ))

    const registerButton = withRouter(({ history }) => (
        <button
            type='button'
            onClick={() => { history.push('/register.page') }}
        >
            Register
        </button>
    ))

    return (
        <Container>
            <Box>
                <Typography> This is the HomePage</Typography>
            </Box>
        </Container>
    )

}

export default HomePage