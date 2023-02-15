import './styles.css';
import { Link } from 'react-router-dom'

function Main() {
  return (
    <>
      <h1>Main</h1>
      <Link to="/sign-in">SignIn</Link>
    </>
  );
}

export default Main;