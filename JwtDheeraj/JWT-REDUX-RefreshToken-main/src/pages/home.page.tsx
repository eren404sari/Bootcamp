import { Box, Button, Container, Typography } from "@mui/material"
import { useNavigate} from "react-router-dom";




const HomePage = () => {
    const navigate = useNavigate();

    const loginButton = () => {
        navigate("/login");
    };
    const registerButton = () => {
        navigate("/register");
    };
    const passwordButton = () => {
        navigate("/resetpassword");
    };

    return (


        <Container
            maxWidth={false}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#c5d4a1",
            }}
            >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
                >
                <Typography variant="h3" align="center" gutterBottom>
                            This is the Home Page
                </Typography>
                <Box sx={{justifyContent: "center", mt: 4 }}>
                    <Button variant="contained" onClick={loginButton}>
                        Login
                    </Button>
                    <Button variant="contained" onClick={registerButton}>
                        Register
                    </Button>
                </Box>
                <Box sx={{justifyContent: "center", mt: 4 }}>
                    <Button variant="text" onClick={passwordButton}>
                        Forgot Password?
                    </Button>
                </Box>
            </Box>
        </Container>
    )

}

export default HomePage