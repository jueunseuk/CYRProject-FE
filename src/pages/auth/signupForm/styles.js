import styled from "styled-components";

export const HorizontalWrapper = styled.div`
    display: flex;
    width: 85%;
    justify-content: space-between;
    margin-top: 17px;
`;

export const Title = styled.div`
    font-size: 16px;
    font-weight: 700;
`;

export const Navigate = styled.div`
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
`;

export const SignupForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 50px;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
`;

export const InputImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: white;
    object-fit: cover;
    cursor: pointer;
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

export const InputLable = styled.div`
    font-size: 14px;
    color: #B8B8B8;
`;

export const InputProfileLable = styled.div`
    font-size: 10px;
    font-weight: 600;
    margin-top: 15px;
    cursor: pointer;
`;

export const Description = styled.span`
    font-size: 10px;
`;

export const Essential = styled.span`
    color: red;
    font-weight: 600;
    font-size: 14px;
`;

export const FileInput = styled.input`
    display: none;
`;

export const OptionalDataWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    width: 85%;
    gap: 80px;
`;

export const GenderSelectArea = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 15px;
`;

export const GenderButton = styled.button`
    width: 50px;
    height: 25px;
    border: none;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    background-color: #E2E2E2;
`;

export const SubmitButton = styled.button`
    width: 330px;
    height: 40px;
    background-color: ${({ disabled }) => (disabled ? "#B8B8B8" : "#C6BC73")};
    border: none;
    border-radius: 15px;
    font-weight: 700;
    color: white;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 17px;
    cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
`;