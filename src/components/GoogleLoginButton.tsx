import React, { useState } from 'react'
import { Button, Stack } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import { GoogleLoginModal } from './GoogleLoginModal'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { fireAuth } from '../apis/firebase'

export const GoogleLoginButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const signInWithGoogle = () => {
    // Google認証プロバイダを利用する
    const provider = new GoogleAuthProvider()
    console.log('login')

    // ログイン用のポップアップを表示
    signInWithPopup(fireAuth, provider)
      .then((res) => {
        const user = res.user
        alert('ログインユーザー: ' + user.displayName)
        console.log('success')
        navigate(`/index`)
      })
      .catch((err) => {
        const errorMessage = err.message
        alert(errorMessage)
        console.log('fail')
      })
  }
  return (
    <Stack>
      <Button
        variant="outlined"
        startIcon={<LoginIcon />}
        onClick={signInWithGoogle}
      >
        GoogleLogin
      </Button>
    </Stack>
  )
}
