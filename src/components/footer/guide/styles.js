import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 20px;

    hr {
        width: 100%;
        margin-top: 5px;
        border: 1px solid black;
    }

    h3 {
        margin-top: 30px;
    }

    h4 {
        padding-left: 20px;
        margin-top: 5px;
    }
    
    li {
        padding-left: 40px;
        margin-bottom: 5px;
    }
`;