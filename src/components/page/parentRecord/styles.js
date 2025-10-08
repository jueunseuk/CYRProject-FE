import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    width: 100%;
    height: 100%;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
    gap: ${({$gap}) => $gap};
    width: 100%;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
    gap: ${({$gap}) => $gap};
`;

export const Text = styled.div`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const DataText = styled.div`
    font-size: 17px;
    font-weight: 800;
    text-decoration: underline;
    width: 50px;
`;

export const Icon = styled.img.attrs((props) => {
    src: props.src
    alt: "Icon"
})`
    width: ${({$width}) => $width || "35px"};
`;

export const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    width: 100%;
    height: 100%;
`;

export const ItemBox = styled.div`
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: white;
    border-radius: 15px;

    &: hover {
        background-color: #fbfbfbff;
        cursor: pointer;
        border: 2px solid black;
    };
`;