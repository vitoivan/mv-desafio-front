import React from 'react'
import StyledForm from '../form'
import StyledInput from '../input';
import StyledButton from '../button';
import { registerSchema } from '../../utils/schemas'
import UseForm from '../../utils/myUseForm';
import api from '../../services/api'
import { useHistory } from 'react-router-dom'
import { toastError, toastSuccess } from '../../utils/toasts'

function RegisterForm() {

    const history = useHistory();
    const handleRegister = (data) => {
    
        api.post('/users', data)
        .then( resp => {
            toastSuccess("Conta criada com sucesso!")
            history.push('/login')
        })
        .catch( error => toastError("CPF já cadastrado") );
    }

    const { register, handleSubmit, formState: { errors } } = UseForm(registerSchema);
    return (
        <StyledForm
            onSubmitFunc={handleRegister}
            handleSubmit={handleSubmit}
        >
            <StyledInput
                isYup
                register={register}
                name="cpf"
                placeholder="cpf"
                errors = {errors}
            />
            <StyledInput
                isYup
                register={register}
                name="password"
                placeholder="password"
                type="password"
                errors = {errors}
            />

            <StyledInput
                isYup
                register={register}
                name="name"
                placeholder="Your name..."
                type="text"
                errors = {errors}
            />
           
            <StyledButton type='submit'>Register</StyledButton>
        </StyledForm>
    )
}

export default RegisterForm;
