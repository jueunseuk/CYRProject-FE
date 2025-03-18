import styled from "styled-components";
import logo from "@/assets/branding/logo.svg";

export const Logo = styled.img.attrs({
    src: logo,
    alt: "Logo Image"
})`
    width: 300px;
    margin-top: 220px;
    margin-bottom: 40px;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px 0px;
`;

export const InputGuideText = styled.div`
    font-size: 14px;
    color: #B8B8B8;
`;

export const InputField = styled.input.attrs((props) => {
    type: props.type
})`
    font-size: 14px;
    width: 330px;
    height: 40px;
    border: none;
    border-bottom: 1px solid #B8B8B8;
    outline: none;
    padding: 15px 5px 0 5px;

    &:focus {
        border-color: #C6BC73;
    }
`;

export const LoginNextButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 330px;
    height: 40px;
    background-color: ${({disabled}) => (disabled ? "#B8B8B8" : "#C6BC73")};
    border-radius: 15px;
    font-weight: 700;
    color: white;
    font-size: 16px;
    cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
`;

export const SignupArea = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 10px;
`;

export const GuideText = styled.div`
    font-size: 12px;
`;

export const NavigateText = styled.div`
    font-size: 12px;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
`;
