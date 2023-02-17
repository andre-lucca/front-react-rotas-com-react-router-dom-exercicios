import { useNavigate } from 'react-router-dom'
import { teachers } from '../../data'

import './style.css';

import logo from '../../assets/logo.png'

function TeacherList({ setDetailedTeacher }) {
  const navigateTo = useNavigate()

  function handleTeacherClick(teacher) {
    setDetailedTeacher(teacher)
    navigateTo('/teacher-detail')
  }

  return (
    <div className="teacher-list-wrapper">
      <img className="logo-img" src={logo} alt="logo" />
      <ul className="teacher-list-container">
        {
          teachers.map(teacher => (
            <li
              key={teacher.id}
              className="teacher-card"
              onClick={() => handleTeacherClick(teacher)}
            >
              <img className="profile-image" src={teacher.avatar} alt="" />
              <h3 className="teacher-name">{teacher.name}</h3>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default TeacherList;