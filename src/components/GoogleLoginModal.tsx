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

type Props = {
    open: boolean;
};

export const GoogleLoginModal: React.FC<Props> = ({ open }) => {
    const [isOpen, setIsOpen] = useState(false);

    const signInWithGoogle = (): void => {
        // Google認証プロバイダを利用する
        const provider = new GoogleAuthProvider();

        // ログイン用のポップアップを表示
        signInWithPopup(fireAuth, provider)
          .then(res => {
            const user = res.user;
            alert("ログインユーザー: " + user.displayName);
          })
          .catch(err => {
            const errorMessage = err.message;
            alert(errorMessage);
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
