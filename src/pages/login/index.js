import { Container } from './styles';
import LoginForm from '../../components/loginForm'
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
        <Container>
            <h1>Login</h1>
            <LoginForm />
            <Link to='/register'>Não possui uma conta ? registre-se aqui</Link>
        </Container>
    )
}

export default LoginPage
