import { Container } from './styles';
import RegisterForm from '../../components/registerForm'
import { Link } from 'react-router-dom'

function RegisterPage() {
    return (
        <Container>
            <h1>Registro</h1>
            <RegisterForm />
            <Link to='/login'>Já possui uma conta ? Faça login aqui</Link>
        </Container>
    )
}

export default RegisterPage
