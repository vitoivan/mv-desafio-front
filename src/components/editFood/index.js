import React, { useState } from 'react'
import StyledInput from '../input';
import { SaveButton, Container } from './styles'
import Loading from '../loading'

function EditFoodComponent({func, load}) {
    
    const [food, setFood] = useState("");

    return (
        <Container>
            <StyledInput 
                type = "text"
                value = {food}
                onChangeFunc = {setFood}
                placeholder = "Food name ..."
                required
            />
            {
                load === false ? (
                    <SaveButton onClick={e => func(food)}>save</SaveButton>
                ):
                (
                    <Loading
                        display={'inline-block'}
                        size={25}
                        margin="1rem 0 0 1.5rem"
                    />
                )
            }
            
        </Container>
    )
}

export default EditFoodComponent
