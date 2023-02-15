import { Link } from 'react-router-dom';
import './styles.css';

function Main() {
  return (
    <>
      <Link to="/sign-in">SignIn</Link>
      <h1>Main</h1>
    </>
  );
}

export default Main;