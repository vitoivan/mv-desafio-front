import React, { useState } from 'react'
import StyledInput from '../input';
import { SaveButton } from './styles'

function EditFoodComponent({func}) {
    
    const [food, setFood] = useState("");
    return (
        <div>
            <StyledInput 
                type = "text"
                value = {food}
                onChangeFunc = {setFood}
                placeholder = "Food name ..."
                required
            />
            <SaveButton onClick={e => func(food)}>save</SaveButton>
        </div>
    )
}

export default EditFoodComponent
