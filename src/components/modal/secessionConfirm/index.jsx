import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as U from "@/apis/user";
import useUserInfo from "@/hooks/localStorage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SecessionConfirm = ({onClose}) => {
    const user = useUserInfo();
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    const handleClickSecession = async () => {
        try {
            await U.secession();
            alert("회원 탈퇴 완료!");
            navigate("/");
        } catch(error) {

        }
    };

    return (
        <>
            <S.Wrapper>
                <S.Content>
                    <BC.Text $size={"20px"} $weight={"600"}>정말로 탈퇴하시겠습니까?</BC.Text>
                    <BC.VerticalWrapper $ai={"flex-start"} $gap={"3px"}>
                        <BC.Text $size={"13px"} $color={"#878787"}>- 탈퇴를 하더라도 일주일간 회원의 정보는 그대로 유지됩니다.</BC.Text>
                        <BC.Text $size={"13px"} $color={"#878787"}>- 탈퇴 후 일주일 이내에 가입할 경우 계정은 복구됩니다.</BC.Text>
                        <BC.Text $size={"13px"} $color={"#878787"}>- 일주일이 지나면 본인의 모든 활동 정보가 사라지게 됩니다.</BC.Text>
                    </BC.VerticalWrapper>
                    <BC.VerticalWrapper $ai={"flex-start"} $gap={"3px"}>
                        <BC.Text $size={"15px"}>탈퇴를 원하시는 경우 본인의 닉네임을 정확하게 입력해주세요.</BC.Text>
                        <BC.Input type="text" $w={"70%"} style={{padding: "5px 10px", fontSize: "13px"}}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={`${user.nickname}`}
                        />
                    </BC.VerticalWrapper>
                    <BC.HorizontalWrapper $gap={"20px"}>
                        <S.Button $bg={input !== user.nickname ? "rgba(255, 204, 204, 1)" : "#f00"} style={{color: "white"}}
                            disabled={input !== user.nickname}
                            onClick={handleClickSecession}
                        >
                            탈퇴하기
                        </S.Button>
                        <S.Button $bg={"#E7E7E7"} onClick={onClose}>취소</S.Button>
                    </BC.HorizontalWrapper>
                </S.Content>
            </S.Wrapper>
        </>
    )
};

export default SecessionConfirm;