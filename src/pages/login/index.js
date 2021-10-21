import { Container } from './styles';
import LoginForm from '../../components/loginForm'
import { Link, Redirect } from 'react-router-dom'
import { useUser } from '../../providers/user';
import { MV_DESAFIO_LOCALSTORAGE_USER } from '../../utils/constants';

function LoginPage() {

    const { user } = useUser();

    const localUser = JSON.parse(localStorage.getItem(MV_DESAFIO_LOCALSTORAGE_USER));
    if (user || localUser) {
       return <Redirect to='/' />
    }
    return (
        <Container>
            <h1>Login</h1>
            <LoginForm />
            <Link to='/register'>Não possui uma conta ? registre-se aqui</Link>
        </Container>
    )
}

export default LoginPage
