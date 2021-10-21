import { UserProvider } from './user'
import { FoodProvider } from './food'

const Providers = ({children}) => {

    return (
        <FoodProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </FoodProvider>
    )
}

export default Providers;