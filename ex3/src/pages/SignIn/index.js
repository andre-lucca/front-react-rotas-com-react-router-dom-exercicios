import { useNavigate } from 'react-router-dom'

import './style.css'

import logo from '../../assets/logo.png'

function SignIn() {
  const navigate = useNavigate()

  return (
    <div className="container-sign-in">
      <form>
        <div className="container-form">
          <img src={logo} alt="Logo" />
          <div className="container-input">
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Senha" />
            <span>Não tem cadastro? Clique aqui!</span>
          </div>
          <button
            type="button"
            onClick={() => navigate('/teacher-list')}
          >Login</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn