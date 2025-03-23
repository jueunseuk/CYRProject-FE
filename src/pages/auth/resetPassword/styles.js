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
    gap: 20px;
    margin-bottom: 10px;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
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

export const LoginNextButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 330px;
    height: 40px;
    background-color: ${({ disabled }) => (disabled ? "#B8B8B8" : "#C6BC73")};
    border: none;
    border-radius: 15px;
    font-weight: 700;
    color: white;
    font-size: 16px;
    margin-top: 10px;
    cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
`;

export const SignupArea = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 10px;
`;

export const NavigateText = styled.div`
    font-size: 12px;
    text-decoration: underline;
    font-weight: 600;
    cursor: pointer;
`;

export const Essential = styled.span`
    color: red;
    font-weight: 600;
    font-size: 14px;
`;
