import React, { useState } from 'react'
import { Button, Stack } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import { GoogleLoginModal } from './GoogleLoginModal'

export const GoogleLoginButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Stack>
      <Button
        variant="outlined"
        startIcon={<LoginIcon />}
        onClick={() => setIsOpen(true)}
      >
        GoogleLogin
      </Button>
      <GoogleLoginModal open={isOpen} />
    </Stack>
  )
}
