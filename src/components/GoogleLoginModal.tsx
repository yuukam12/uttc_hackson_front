import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { fireAuth } from "../apis/firebase";
import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Typography
  } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Props = {
    open: boolean;
};

export const GoogleLoginModal: React.FC<Props> = ({ open }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        // Google認証プロバイダを利用する
        const provider = new GoogleAuthProvider();
        console.log("login")

        // ログイン用のポップアップを表示
        signInWithPopup(fireAuth, provider)
          .then(res => {
            const user = res.user;
            alert("ログインユーザー: " + user.displayName);
            console.log("success")
            navigate(`/index`);
          })
          .catch(err => {
            const errorMessage = err.message;
            alert(errorMessage);
            console.log("fail")
          });
    };

    return(
        <div>
            <Dialog open={open} onClose={() => setIsOpen(true)}>
                <DialogContent>
                    <Typography>Login with Google Account</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => signInWithGoogle} variant="contained"  style={{ backgroundColor: '#555'}}>
                        GoogleLogin
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        )
}
