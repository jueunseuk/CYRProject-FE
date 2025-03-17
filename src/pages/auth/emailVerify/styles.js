import styled from "styled-components";
import logo from "@/assets/branding/logo2.svg";

export const Logo = styled.img.attrs({
    src: logo,
    alt: "Logo Image"
})`
    width: 120px;
    margin-top: 17px;
`;

export const Title = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 800;
    margin-top: 200px;
    margin-bottom: 10px;
`;

export const GuideText = styled.div`
    display: flex;
    font-size: 14px;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 10px;
    margin-bottom: 10px;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const InputField = styled.input.attrs((props) => {
    type: props.type || "text"
})`
    font-size: 14px;
    width: ${({ width }) => width};
    height: 40px;
    border: none;
    border-bottom: 1px solid #B8B8B8;
    outline: none;
    padding: 15px 5px 0 5px;

    &:focus {
        border-color: #C6BC73;
    }
`;

export const EmailSendButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82px;
    height: 34px;
    border-radius: 10px;
    font-size: 12px;
    color: white;
    background-color: black;
    cursor: pointer;
`;

export const LoginNextButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 330px;
    height: 40px;
    background-color: #C6BC73;
    border-radius: 15px;
    font-weight: 700;
    color: white;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
`;

export const NavigateText = styled.div`
    font-size: 12px;
    font-weight: 600;
    text-decoration: underline;
    margin-top: 10px;
    cursor: pointer;
`;
