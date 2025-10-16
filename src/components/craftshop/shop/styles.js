import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 20px;
    gap: 20px;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
    gap: ${({$gap}) => $gap};
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
    gap: ${({$gap}) => $gap};
    width: 100%;
`;

export const Text = styled.span`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const QuoteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px 20px;
    background-color: #fcf9e5ff;
    gap: 5px;
    border-left: 3px solid #C6BC73;
`;

export const Icon = styled.img.attrs((props) => {
    src: props.src
})`
    width: ${({$width}) => $width || "15px"};
`;

export const ItemImage = styled.img`
    width: 100%;
`;

export const CraftShopButton = styled.button`
    padding: 10px 20px;
    align-self: center;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    outline: none;
    transition: all 0.2s ease;
    background: #ecececff;
    cursor: pointer;

    &:hover {
        background:  #e7e7e7ff;
    }
`;

export const TabWrapper = styled.div`
    position: relative;
    display: flex;
    border-bottom: 1px solid #cacaca;
    width: 100%;
`;

export const NavigateText = styled.div`
    text-align: center;
    font-size: 14px;
    font-weight: ${({ $active }) => ($active ? "600" : "400")};
    padding: 10px 25px;
    cursor: pointer;
    color: ${({ $active }) => ($active ? "black" : "#666")};
    background-color: ${({ $active }) => ($active ? "#f6f6f6" : "white")};
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
`;

export const Underline = styled.div`
    position: absolute;
    bottom: 0;
    height: 2px;
    width: ${({ $width }) => $width}px;
    background: black;
    transition: transform 0.3s ease;
    transform: translateX(${({ $offset }) => $offset}px);
`;

export const ShopItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 15px;
`;

export const ShopItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 194px;
    padding: 10px 15px;
    border: 1px solid #eee;
    border-radius: 8px;
    transition: all 0.2s ease;
    cursor: pointer;
    gap: 10px;
    
    &: hover {
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
        scale: 1.03;
    }
`;