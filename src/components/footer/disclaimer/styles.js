import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 20px;
    gap: 5px;
`;

export const Blank = styled.br`
    height: 20px;
`;

export const Contour = styled.hr`
    width: 100%;
    border: 0;
    background-color: #C6BC73;
    height: 3px;
    margin: 15px 0;
    width: 50%;
`

export const Title = styled.h1`
    font-size: 30px;
`;

export const SubTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: red;
`;

export const Text = styled.span`
    font-size: ${({$size}) => $size || "15px"};
    font-weight: ${({$weight}) => $weight || "500"};
    color: ${({$color}) => $color || "black"};
`;

export const List = styled.ol`
    
`;

export const FirstListItem = styled.li`
    margin-left: 10px;
    margin-bottom: 5px;
    font-size: 15px;
    color: #505050;
    list-style: none;
`;
