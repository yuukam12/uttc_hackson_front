import React, { useState } from "react"
import { GoogleLoginModal } from "../components/GoogleLoginModal"
import { GoogleLoginButton } from "../components/GoogleLoginButton"
import { Stack } from "@mui/material"
import dogImage from "../images/犬.png"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const LoginPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Stack>
            <GoogleLoginButton/>
            <Card sx={{ minHeight: 1500 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Welcome to Our Knowledge Base!
                    </Typography>
                    <CardMedia
                        component="img"
                        style={{ maxWidth: 300, maxHeight: 300, width: 'auto', height: 'auto' }}
                        image ={dogImage}
                        alt="犬"
                    />
                </CardContent>
            </Card>
        </Stack>
        )
}