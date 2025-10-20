import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
`;

export const SettingWrapper = styled.div`
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 20px;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    gap: ${({$gap}) => $gap};
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({$gap}) => $gap};
    justify-content: ${({$jc}) => $jc || "flex-start"};
    align-items: ${({$ai}) => $ai || "flex-start"};
`;

export const Text = styled.div`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const Image = styled.img`
    width: 216px;
    height: 100px;
`;

export const NoneImage = styled.div`
    width: 216px;
    height: 100px;
    background-color: #eee;
`;

export const BannerItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid #C6BC73;

    &: hover {
        scale: 1.03;
        box-shadow: 0 0 16px rgb(0, 0, 0, 0.3);
    }
`;

export const Button = styled.button`
    width: 80px;
    padding: 8px 0;
    border: none;
    border-radius: 7px;
    font-weight: 700;
    font-size: 13px;
    outline: none;
    transition: all 0.2s ease;
    cursor: pointer;

    &: hover {
        background-color: ${({$bg}) => $bg};
        color: ${({$color}) => $color || "black"};
    }
`;