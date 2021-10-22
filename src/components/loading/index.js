import { Loading } from './styles'

const  LoadingComponent = ({margin, display, size = 30}) => {
    return (
        <Loading margin={margin} display={display} size={size}></Loading>
    )
}

export default LoadingComponent
