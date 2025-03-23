import styled from "styled-components";
import logo from "@/assets/branding/logo.svg";

export const Logo = styled.img.attrs({
    src: logo,
    alt: "Logo Image"
})`
    width: 300px;
    margin-top: 220px;
`;

export const LoginMethod = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 40px;
`;

export const KakaoLoginButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 42px;
    border-radius: 16px;
    font-size: 14px;
    font-weight: bold;
    background-color: #F9E000;
    cursor: pointer;
`;

export const NaverLoginButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 42px;
    border-radius: 16px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    background-color: #03CF5D;
    cursor: pointer;
`;

export const GoogleLoginButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 42px;
    border: 1px solid #999999;
    border-radius: 16px;
    font-size: 14px;
    font-weight: bold;
    background-color: transparent;
    cursor: pointer;
`;

export const EmailLoginButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 42px;
    border-radius: 16px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    background-color: #000000;
    cursor: pointer;
`;

export const SignupArea = styled.div`
    display: flex;
    gap: 26px;
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