import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import SignIn from './pages/SignIn'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} index />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes