import { Container } from './styles';
import RegisterForm from '../../components/registerForm'
import { Link, Redirect } from 'react-router-dom'
import { useUser } from '../../providers/user';
import { MV_DESAFIO_LOCALSTORAGE_USER } from '../../utils/constants';

function RegisterPage() {

    const { user } = useUser();

    const localUser = JSON.parse(localStorage.getItem(MV_DESAFIO_LOCALSTORAGE_USER));
    if (user || localUser) {
       return <Redirect to='/' />
    }

    return (
        <Container>
            <h1>Registro</h1>
            <RegisterForm />
            <Link to='/login'>Já possui uma conta ? Faça login aqui</Link>
        </Container>
    )
}

export default RegisterPage
