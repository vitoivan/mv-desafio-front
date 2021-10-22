import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    h1 {
        margin-bottom: 2rem;
    }

    input {
        display: block;
        margin-top: 1rem;
    }
    button {
        margin: 1rem auto;
    }

    a {
        text-decoration: underline;
    }
    a:hover {
        text-decoration: none;
    }
`;