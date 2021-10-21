import styled from "styled-components";
import { StyledButton } from "../button/styles";

export const StyledRow = styled.tr`
    border-top: 1px solid #fff;
    position: relative;
`;

export const StyledBtnEdit = styled(StyledButton)`
    padding: .2rem .6rem;
    background: #007bff;
    color: #fff;
    font-size: .9rem;
    font-weight: 600;
`;

export const StyledBtnDelete = styled(StyledButton)`
    padding: .2rem .6rem;
    background: #dc3545;
    color: #fff;
    font-size: .9rem;
    font-weight: 600;
`;