import { StyledInput } from './styles';

function Input({
    isYup = false,
    name,
    register,
    type = 'text',
    onChangeFunc,
    stateValue,
    ...rest
    
}) {
    if(isYup === true) {
        return ( 
        <StyledInput 
            {...register(name)} 
            type={type}
            {...rest}
        />);
    }
    else {
        return (
        <StyledInput 
            type={type} 
            onChange={ e => onChangeFunc(e.target.value)}
            value = {stateValue}
            {...rest}
        /> );
    }
        
}

export default Input;