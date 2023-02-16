import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'
import TeacherList from './pages/TeacherList'
import TeacherDetail from './pages/TeacherDetail'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/teacher-list" element={<TeacherList />} />
        <Route path="/teacher-detail" element={<TeacherDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router