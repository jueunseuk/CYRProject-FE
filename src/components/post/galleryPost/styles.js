import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 800px;
    border: 1px solid #E7E7E7;
    padding: 20px;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    justify-content: ${({$justify}) => $justify || "flex-start"};
    align-items: ${({$align}) => $align || "center"};
    gap: ${({$gap}) => $gap};
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${({$justify}) => $justify || "center"};
    align-items: ${({$align}) => $align || "flex-start"};
    gap: ${({$gap}) => $gap};
    width: 100%;
`;

export const Text = styled.div`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
    text-align: center;
`;

export const Profile = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 35px;
    cursor: pointer;
    object-fit: cover;
`;

export const Icon = styled.img`
    width: ${({$width}) => $width};
    height: ${({$height}) => $height};
`;

export const Contour = styled.hr`
    width: 100%;
    border: 0;
    background-color: #E7E7E7;
    height: 1px;
    margin-top: 20px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    gap: 20px;
`;

export const DescriptionArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding: 20px 30px;
    background-color: #F4F3E9;
    gap: 20px;
`;

export const ImageArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
`;

export const ImageItem = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const NaviagateButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 15px;
    background-color: #E7E7E7;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`;