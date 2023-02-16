import './style.css';

import logo from '../../assets/logo.png'
import dani from '../../assets/teachers/dani.jpg'

function TeacherList() {
  return (
    <div className="teacher-list-wrapper">
      <img className="logo-img" src={logo} alt="logo" />
      <ul className="teacher-list-container">
        <li className="teacher-card">
          <img className="profile-image" src={dani} alt="profile image" />
          <h3 className="teacher-name" >Daniel Lopes</h3>
        </li>
        <li className="teacher-card">
          <img className="profile-image" src={dani} alt="profile image" />
          <h3 className="teacher-name" >Daniel Lopes</h3>
        </li>
        <li className="teacher-card">
          <img className="profile-image" src={dani} alt="profile image" />
          <h3 className="teacher-name" >Daniel Lopes</h3>
        </li>
        <li className="teacher-card">
          <img className="profile-image" src={dani} alt="profile image" />
          <h3 className="teacher-name" >Daniel Lopes</h3>
        </li>
        <li className="teacher-card">
          <img className="profile-image" src={dani} alt="profile image" />
          <h3 className="teacher-name" >Daniel Lopes</h3>
        </li>
        <li className="teacher-card">
          <img className="profile-image" src={dani} alt="profile image" />
          <h3 className="teacher-name" >Daniel Lopes</h3>
        </li>
        <li className="teacher-card">
          <img className="profile-image" src={dani} alt="profile image" />
          <h3 className="teacher-name" >Daniel Lopes</h3>
        </li>
        <li className="teacher-card">
          <img className="profile-image" src={dani} alt="profile image" />
          <h3 className="teacher-name" >Daniel Lopes</h3>
        </li>
        <li className="teacher-card">
          <img className="profile-image" src={dani} alt="profile image" />
          <h3 className="teacher-name" >Daniel Lopes</h3>
        </li>
        <li className="teacher-card">
          <img className="profile-image" src={dani} alt="profile image" />
          <h3 className="teacher-name" >Daniel Lopes</h3>
        </li>
      </ul>
    </div>
  );
}

export default TeacherList;