import styled from "styled-components";

export const MoreOptionWrapper = styled.div`
`;

export const MoreIcon = styled.div`
    position: relative;
    background-image: url(${({ $more }) => $more});
    background-repeat: no-repeat;
    background-position: center;
    width: 16px;
    height: 16px;
    cursor: pointer;
    z-index: 1000;
`;

export const OptionBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #ddd;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    border-radius: 8px;
    z-index: 2;
    width: fit-content;
    padding: 4px 0;
`;

export const OptionButton = styled.button`
    padding: 10px 12px;
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;

    &:hover {
        background-color: #f5f5f5;
    }
`;