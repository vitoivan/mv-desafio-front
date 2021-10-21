import styled from "styled-components";
import { StyledButton } from '../button/styles'

export const SaveButton = styled(StyledButton)`
    display: inline-block;
    margin-left: 1rem;
`;

export const Container = styled.div`
    position: absolute;
    width: fit-content;
    margin-left: 1rem;
    input {
        display: inline-block;
        width: 200px;
    }
`;