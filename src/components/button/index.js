import { StyledButton } from './styles'

function ButtonComponent({ children, type }) {
    return (
        <StyledButton type={type}>
            {children}
        </StyledButton>
    )
}

export default ButtonComponent
