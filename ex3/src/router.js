import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'

import SignIn from './pages/SignIn'
import TeacherList from './pages/TeacherList'
import TeacherDetail from './pages/TeacherDetail'

function ProtectedRoute() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />
}

function Router() {
  const [detailedTeacher, setDetailedTeacher] = useState({})

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/sign-in" element={<SignIn />} />

        <Route path="/teacher-list" element={<ProtectedRoute />}>
          <Route
            path=""
            element={
              <TeacherList
                setDetailedTeacher={setDetailedTeacher}
              />
            }
          />
        </Route>

        <Route path="/teacher-detail" element={<ProtectedRoute />}>
          <Route
            path=""
            element={
              <TeacherDetail
                teacher={detailedTeacher}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router