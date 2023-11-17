import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { IndexPage } from './pages/IndexPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { fireAuth } from './apis/firebase'
import { Typography } from '@mui/material'

function App() {
  const [loginUser, setLoginUser] = useState(fireAuth.currentUser)

  // ログイン状態を監視して、stateをリアルタイムで更新する
  onAuthStateChanged(fireAuth, (user) => {
    setLoginUser(user)
  })

  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/index" element={<IndexPage/>} />
      </Routes>
    </Router>
  )
}

export default App
