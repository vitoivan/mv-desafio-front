import React from 'react'
import StyledForm from '../form'
import StyledInput from '../input';
import StyledButton from '../button';
import { registerSchema } from '../../utils/schemas'
import UseForm from '../../utils/myUseForm';
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

function RegisterForm() {

    const history = useHistory();
    const handleRegister = (data) => {
    
        api.post('/users', data)
        .then( resp => history.push('/login'))
        .catch( error => console.log("CPF já cadastrado") );
    }

    const { register, handleSubmit } = UseForm(registerSchema);
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
                
            />
            <StyledInput
                isYup
                register={register}
                name="password"
                placeholder="password"
                type="password"
                
            />

            <StyledInput
                isYup
                register={register}
                name="name"
                placeholder="Your name..."
                type="text"
                
            />
           
            <StyledButton type='submit'>Register</StyledButton>
        </StyledForm>
    )
}

export default RegisterForm;
