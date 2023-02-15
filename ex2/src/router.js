import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'

import Main from './pages/Main'
import SignIn from './pages/SignIn'

function ProtectedRoutes() {
  const isAuthenticated = false

  return (
    <>
      {
        isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />
      }
    </>
  )
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router