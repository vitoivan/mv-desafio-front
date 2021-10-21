import React from 'react'
import StyledForm from '../form'
import StyledInput from '../input'
import StyledButton from '../button'
import { foodSchema } from '../../utils/schemas'
import UseForm from '../../utils/myUseForm';
import { useUser } from '../../providers/user'
import api from '../../services/api'
import { useFood } from '../../providers/food'

function CreateFoodComponent() {

    const { register, handleSubmit } = UseForm(foodSchema);
    const { user } = useUser();
    const { food, setFood } = useFood();
    const handleFood = (data) => {
        data = {
            ...data,
            userId: user.id,
        }
        api.post("/breakfast", data)
        .then( resp => {
            setFood([...food, resp.data])
        })
        .catch( err => console.log('deu ruim'))
    }
    return (
        <StyledForm
        onSubmitFunc={handleFood}
        handleSubmit={handleSubmit}
        >
            <StyledInput
                isYup
                register={register}
                name="food"
                placeholder="Qual alimento deseja adicionar ..."
                
            />
        <StyledButton type='submit'>Adicionar</StyledButton>
    </StyledForm>
    )
}

export default CreateFoodComponent
