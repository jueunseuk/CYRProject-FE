import styled from "styled-components";

export const PollItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    border: 1px solid #eee;
    cursor: pointer;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    padding : 10px 8px;
    gap: 15px;
    transition: all 0.2s ease;

    &:hover {
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
        scale: 1.03;
    }
`;

export const PollOptionItem = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid #eee;
    cursor: pointer;
    padding : 8px 5px;
    background-color: ${({$target}) => ($target ? "#FCF9E5" : "")};

    &:hover {
        background-color: ${({$join}) => ($join ? "" : "#eee")};
    }
`;

export const Button = styled.div`
    width: 100px;
    align-self: center;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    color: ${({disabled}) => disabled ? "#aaa" : "black"};
    background-color: ${({disabled}) => disabled ? "#fafafa" : "#ddd"};
    padding: 7px 15px;
    border-radius: 8px;
    transition: all 0.2s ease;
    cursor: ${({disabled}) => disabled ? "not-allowed" : "pointer"};

    &: hover {
        background-color: ${({disabled}) => disabled ? "#fafafaff" : "#ccc"};
    }
`;

export const Option = styled.div`
    color: white;
    background-color: ${({$bg}) => $bg};
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    width: 48%;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;

    &: hover {
        background-color: ${({$hbg}) => $hbg};
    }
`;