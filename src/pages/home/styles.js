import styled from 'styled-components';

export const Container = styled.section`
    width: 90%;
    margin: 0 auto;
    
    form {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        width: fit-content;
    }
`;
export const Header = styled.section`
    display: flex;
    width: 100%; 
    justify-content: space-between;
    align-items: center;
    margin: 1.5em 0;
`;

export const Logout = styled.button`
    height: fit-content;
    padding: .5rem 1rem;
    border: none;
    background: none;
    color: #fff;
    border-radius: 7px;
    border: 1px solid #fff;
    font-weight: 700;
    cursor: pointer;
`;