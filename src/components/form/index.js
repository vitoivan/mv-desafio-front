import { StyledForm } from './styles'

function FromComponent({ children, onSubmitFunc, handleSubmit }) {

    return (
        <StyledForm onSubmit={handleSubmit(onSubmitFunc)}>
            {children}
        </StyledForm>
    )
}

export default FromComponent
