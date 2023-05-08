import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import { LoadingButton as _LoadingButton } from "@mui/lab";
import { useForgotPasswordMutation } from "../redux/api/authApi";
import FormInput from "../components/FormInput";

const LoadingButton = styled(_LoadingButton)`
  background-color: black;
`;

const forgotPasswordSchema = object({
    email: string()
        .min(1, "Email is required")
        .email("Email address is not valid"),
});

export type ForgotPasswordInput = TypeOf<typeof forgotPasswordSchema>;

const PassResetPage = () => {


    useEffect(() => {
        if (isSuccess) {
            toast.success("Password reset email sent!");
        }
        if (isError) {
        }
    }, [isLoading]);

    const onSubmitHandler:  = () => {
    
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
                <Typography> Reset Password Page</Typography>
                <FormProvider {...methods}>
                    <Box
                        component="form"
                        noValidate
                        width="100%"
                        onSubmit={handleSubmit(onSubmitHandler)}
                    >
                        <FormInput
                            name="email"
                            type="email"
                            label="Enter the email associated with your account"
                        ></FormInput>

                        <LoadingButton
                            type="submit"
                            variant="contained"
                            loading={isLoading}
                            disableElevation
                            fullWidth
                        >
                            Submit
                        </LoadingButton>
                    </Box>
                </FormProvider>

            </Box>
        </Container>
    );

};

export default PassResetPage