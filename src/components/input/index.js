import { StyledInput, ErrorMsg } from './styles';

function Input({
    isYup = false,
    name,
    register,
    type = 'text',
    onChangeFunc,
    stateValue,
    errors,
    ...rest
    
}) {
    if(isYup === true) {
        return (
        <>
            <StyledInput
                autoComplete="off"
                {...register(name)} 
                type={type}
                {...rest}
            />
            <ErrorMsg>{errors && name && errors[name]?.message }</ErrorMsg>
        </>
    
        );
    }
    else {
        return (
        <StyledInput 
            autoComplete="off"
            type={type} 
            onChange={ e => onChangeFunc(e.target.value)}
            value = {stateValue}
            {...rest}
        /> );
    }
        
}

export default Input;