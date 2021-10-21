import React, { useState } from 'react'
import StyledInput from '../input';
import { SaveButton, Container } from './styles'

function EditFoodComponent({func}) {
    
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
            <SaveButton onClick={e => func(food)}>save</SaveButton>
        </Container>
    )
}

export default EditFoodComponent
