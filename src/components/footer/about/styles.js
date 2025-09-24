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

    h2 {
        font-size: 24px;
    }

    h3 {
        margin-top: 30px;
        margin-bottom: 5px;
        font-size: 20px;
    }

    h4 {
        padding-left: 12px;
        margin-top: 5px;
        font-weight: 500;
        font-size: 16px;
    }

    h5 {
        font-size: 14px;
    }

    h6 {
        font-size: 12px;
    }
    
    li {
        list-style: number;
        margin: 3px 10px 3px 30px;
    }

    blockquote {
        margin-top: 5px;
        margin-left: 12px;
        background-color: #F4F3E9;
        padding: 12px 8px;
    }

    p {
        margin-top: 5px;
        margin-left: 12px;
        background-color:#F4F3E9;
        padding: 16px;
    }
`;