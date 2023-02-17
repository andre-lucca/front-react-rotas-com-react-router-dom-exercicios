import { useNavigate } from 'react-router-dom'

import './style.css'

import logo from '../../assets/logo.png'
import arrowLeft from '../../assets/arrow-left.svg'

function TeacherDetail({ teacher }) {
  const navigateTo = useNavigate()

  return (
    <div className="container-teacher-detail">
      <img
        className="back-button"
        src={arrowLeft} alt=""
        onClick={() => navigateTo(-1)}
      />
      <img className="logo" src={logo} alt="" />
      <div className="teacher-detail-card-container">
        <div className="detailed-content">
          <img src={teacher.avatar} alt="" />
          <h1>{teacher.name}</h1>
          <p>{teacher.stack}</p>
          <hr />
          <h2>Bio</h2>
          <p>{teacher.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default TeacherDetail