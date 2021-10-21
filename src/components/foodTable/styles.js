import styled from "styled-components";

export const StyledTable = styled.table`
    border-collapse: collapse;
    width: fit-content;
    margin-top: 2rem;

    td, th {
        padding: .5rem 1rem;
        text-align: left;
        font-weight: 300;
    }

    thead td {
        font-weight: bold;
    }
`;