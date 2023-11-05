import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { IndexPage } from './pages/IndexPage'
import { ProfilePage } from './pages/ProfilePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { fireAuth } from './apis/firebase'

function App() {
  const [loginUser, setLoginUser] = useState(fireAuth.currentUser)

  // ログイン状態を監視して、stateをリアルタイムで更新する
  onAuthStateChanged(fireAuth, (user) => {
    setLoginUser(user)
  })
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<IndexPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}

export default App
