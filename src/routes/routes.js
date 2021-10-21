import { Route, Switch } from "react-router";
import LoginPage from '../pages/login'
import RegisterPage from '../pages/register'
import HomePage from '../pages/home'
import { useUser } from "../providers/user";
import {
    MV_DESAFIO_LOCALSTORAGE_USER,
    MV_DESAFIO_LOCALSTORAGE_FOOD
} from '../utils/constants'
import { useFood } from "../providers/food";

function RouterComponent() {

    const { user, setUser } = useUser();
    const { food, setFood } = useFood();

    const localUser = localStorage.getItem(MV_DESAFIO_LOCALSTORAGE_USER);
    if (!user && localUser) {
        const parsed = JSON.parse(localUser);
        setUser({
            ...parsed,
            auth: true
        })
    }

    const localFood = JSON.parse(localStorage.getItem(MV_DESAFIO_LOCALSTORAGE_FOOD));
    if (!food && localFood.length > 0) {
        const parsed = JSON.parse(localFood);
        setFood(parsed)
    }

    return (
        <Switch>
            <Route path='/login' component={LoginPage}/>
            <Route path='/register' component={RegisterPage}/>
            <Route exact path='/' component={HomePage}/>
        </Switch>
    )
}

export default RouterComponent
