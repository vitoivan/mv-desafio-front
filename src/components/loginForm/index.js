import React from 'react'
import StyledForm from '../form'
import StyledInput from '../input';
import StyledButton from '../button';
import { loginSchema } from '../../utils/schemas'
import UseForm from '../../utils/myUseForm';
import api from '../../services/api'
import { useUser } from '../../providers/user'
import { useHistory } from 'react-router-dom'

function LoginForm() {

    const { setUser } = useUser();
    const history = useHistory();

    const handleLogin = (data) => {
    
        api.post('/users/login', data)
        .then( resp => {
            const userData = resp.data;
            setUser({...userData, auth: true })
            console.log(userData)
            history.push('/');
        })
        .catch( error => console.log(error) );
    }

    const { register, handleSubmit } = UseForm(loginSchema);
    return (
        <StyledForm
            onSubmitFunc={handleLogin}
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
           
            <StyledButton type='submit'>Login</StyledButton>
        </StyledForm>
    )
}

export default LoginForm
