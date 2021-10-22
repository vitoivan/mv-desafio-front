import React from 'react'
import StyledForm from '../form'
import StyledInput from '../input'
import StyledButton from '../button'
import { foodSchema } from '../../utils/schemas'
import UseForm from '../../utils/myUseForm';
import { useUser } from '../../providers/user'
import api from '../../services/api'
import { useFood } from '../../providers/food'
import Loading from '../loading'
import { toastError } from '../../utils/toasts'

function CreateFoodComponent() {

    const { register, handleSubmit } = UseForm(foodSchema);
    const { user, load, setLoad } = useUser();
    const { food, setFood } = useFood();
    const handleFood = (data) => {
        setLoad(true)
        data = {
            ...data,
            userId: user.id,
        }
        api.post("/breakfast", data)
        .then( resp => {
            setFood([...food, resp.data])
            setLoad(false)
        })
        .catch( err => {
            toastError("Alguém já vai trazer este alimento !")
            setLoad(false)
        })
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
        {
            load === false ? (
                <StyledButton type='submit'>Adicionar</StyledButton>
            ):
            <Loading size={30}/>
        }
    </StyledForm>
    )
}

export default CreateFoodComponent
