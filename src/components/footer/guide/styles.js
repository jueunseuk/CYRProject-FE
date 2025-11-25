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
    line-height: 170%;
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
    font-weight: 600;
    color: #505050;
    list-style: none;
`;
    
export const SecondListItem = styled.li`
    margin-left: 27px;
    margin-bottom: 5px;
    font-size: 15px;
    color: #505050;
    list-style: none;
`;

export const ThirdListItem = styled.li`
    margin-left: 42px;
    margin-bottom: 5px;
    font-size: 15px;
    color: #505050;
    list-style: none;
`;

export const FourthListItem = styled.li`
    margin-left: 53px;
    margin-bottom: 5px;
    font-size: 15px;
    color: #505050;
    list-style: none;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #505050;
    &: hover {
        text-decoration: underline;
    }
`;

export const Table = styled.table`
    border-collapse: collapse;
    margin-bottom: 7px;
    margin-left: 25px;
`;

export const Row = styled.tr`
    border: 1px solid black;
    font-size: 15px;
    text-align: center;
`;

export const HRow = styled.tr`
    border: 1px solid black;
    border-bottom: 3px double black;
    background-color: #F4F3E9;
`;

export const Column = styled.td`
    border: 1px solid black;
    padding: 5px 10px;
`;

export const HColumn = styled.th`
    border: 1px solid black;
    padding: 7px 10px;
`;