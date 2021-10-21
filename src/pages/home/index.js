import { Container, Header, Logout } from './styles';
import FoodTable from '../../components/foodTable'
import CreateFood from '../../components/createFood'
import { useUser } from '../../providers/user';
import { useHistory } from 'react-router-dom'
import { useFood } from '../../providers/food';
import { 
    MV_DESAFIO_LOCALSTORAGE_FOOD,
    MV_DESAFIO_LOCALSTORAGE_USER
 } from '../../utils/constants'

function HomePage() {

    const { user, setUser } = useUser();
    const { setFood } = useFood();
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem(MV_DESAFIO_LOCALSTORAGE_USER)
        localStorage.removeItem(MV_DESAFIO_LOCALSTORAGE_FOOD)
        setUser(null)
        setFood([])
        history.push('/login')
    }
    return (
        <Container>
            <Header>
                <h1>Olá, {user?.name}!!</h1>
                <Logout onClick={logout}>Logout</Logout>
            </Header>
            <CreateFood />
           <FoodTable />
        </Container>
    )
}

export default HomePage
