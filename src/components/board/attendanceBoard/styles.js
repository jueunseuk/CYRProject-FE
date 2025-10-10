import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 20px;
`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
`;

export const Description = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-size: 13px;
    margin-top: 10px;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-top: 20px;
`;

export const Text = styled.span`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    gap: ${({$gap}) => $gap || "10px"};
    align-items: center;
`;

export const TextBox = styled.div`
    font-size: 13px;
    font-weight: 700;
    color: #B3A225;
    padding: 7px 13px;
    background-color: #F4F3E9;
    border-radius: 10px;
    margin-top: 10px;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 25px;
`;

export const Row = styled.tr`
    border: 1px solid black;
    width: 100%;
`;

export const Column = styled.td`
    font-size: ${({$size}) => $size || "13px"};
    background-color: ${({$isToday}) => ($isToday ? "#F9F9F9" : "white")};
    width: 350px;
    padding: 8px;
    text-align: ${({$align}) => $align || "center"};
    color: ${({$color}) => $color || "black"};
    border: 1px solid black;
`;

export const TableBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 80px;
    padding: 5px;
`;

export const AttendanceArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F4F3E9;
    width: 100%;
    padding: 10px;
    margin-top: 25px;
`;

export const InputField = styled.textarea`
    font-size: 14px;
    width: 735px;
    height: 65px;
    min-height: 65px;
    max-height: 130px;
    border: 1px solid #E4E4E4;
    outline: none;
    padding: 10px;
    font-size: 15px;
    resize: vertical;
`;

export const AttendanceButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    background-color: ${({disabled}) => (disabled ? "#B8B8B8" : "#C6BC73")};
    font-weight: 700;
    color: white;
    font-size: 13px;
    cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
`;

export const AttendanceBlock = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
`;

export const UserProfile = styled.img`
    width: 50px;
    heigth: 50px;
    max-height: 50px;
    border-radius: 50px;
    object-fit: cover;
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 13px 15px;
    background-color: #F4F3E9;
    width: 750px;
    border-radius: 10px;
    gap: 10px;
`;

export const IconArea = styled.img`
    width: 9px;
    height: 9px;
`;

export const AttendanceTextBox = styled.div`
    width: 100%;
    background-color: white;
    padding: 10px;
    font-size: 12px;
    font-weight: 500;
`;

export const NoAttendanceWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const Icon = styled.img`
    width: ${({$width}) => $width || "15px"};
    height: ${({$height}) => $height || "15px"};
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 710px;
`;