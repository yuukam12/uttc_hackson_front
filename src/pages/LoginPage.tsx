import React, { useState } from "react"
import { GoogleLoginModal } from "../components/GoogleLoginModal"
import { GoogleLoginButton } from "../components/GoogleLoginButton"
import { Stack } from "@mui/material"

export const LoginPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Stack>
            <GoogleLoginButton/>
        </Stack>
        )
}