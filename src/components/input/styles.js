import styled from "styled-components";


export const StyledInput = styled.input`
    background: none;
    border: 1px solid #fff;
    padding: .4rem .7rem;
    border-radius: 7px;
    color: #fff;
    
    &::placeholder {
        color: #a0a0a0;
    }
`;

export const ErrorMsg = styled.span`
    color: #dc3545;
    font-size: .9rem;
`;