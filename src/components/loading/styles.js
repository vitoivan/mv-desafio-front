import styled, { keyframes } from "styled-components";


export const Loading = styled.div`

    // eslint-disable-next-line
    @keyframes Anim {

        0% {
            transform: rotate(0deg);
        }

        100%{
            transform: rotate(360deg);
        }
    }
    display: ${props => props.display };
    width: ${props => props.size + 'px'};
    height: ${props => props.size + 'px'};
    margin: ${props => props.margin};
    border-radius: 100%;
    border: 2px solid #fff;
    border-left: none;
    border-top: none;
    animation: Anim infinite .5s linear;

`;


