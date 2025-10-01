import * as C from "@/apis/cheer";
import * as S from "./styles";
import information from "@/assets/icon/etc/information.svg";
import { useEffect, useState } from "react";

const Cheer = () => {
    const [totalCheer, setTotalCheer] = useState("");
    const [animate, setAnimate] = useState(false);

    const handleRequestCheer = async () => {
        try {
            await C.requestCheer();
            setTotalCheer(totalCheer+1);

            setAnimate(true);
        } catch(error) {
            if(error.response && error.response.data) {
                const status = error.response.status;

                if(status === 401) {
                    alert("로그인이 필요한 서비스입니다.");
                    console.log(error.response);
                } else if(error.response.data.code === "CHEER_002") {
                    alert("응원은 1분에 한 번씩만 가능합니다!");
                }
            }
        }
    };

    useEffect(() => {
        if (animate) {
            const timer = setTimeout(() => setAnimate(false), 400);
            return () => clearTimeout(timer);
        }
    }, [animate]);

    useEffect(() => {
        const fetchCheer = async () => {
            try {
                const response = await C.requestCheerCnt();
                setTotalCheer(response.data);
            } catch(error) {
                console.log("응원 집계 현황을 불러오는 데 실패했습니다.");
            }
        }

        fetchCheer();
    }, [totalCheer]);

    return (
        <>
            <S.Wrapper>
                <S.TitleArea>
                    <S.Text $size={"16px"} $weight={"600"}>응원하기</S.Text>
                    <S.TooltipWrapper>
                        <S.IconArea src={information} />
                        <S.TooltipText>
                            <p style={{fontSize: "16px", fontWeight:"700", marginBottom:"5px"}}>응원이란?</p>
                            <p style={{fontSize:"14px"}}>아래의 응원을 눌러서 유리를 응원해보세요!</p>
                            <p style={{fontSize:"14px"}}>응원은 1분에 1번씩만 가능합니다.</p>
                        </S.TooltipText>
                    </S.TooltipWrapper>
                </S.TitleArea>
                <S.ContentArea>
                    <S.Content>
                        <S.Text $size={"12px"} $color={"white"}>응원합계</S.Text>
                        <S.Text $size={"12px"} $color={"white"}>ㅡ</S.Text>
                        <S.CountText $animate={animate}>{totalCheer} 회</S.CountText>
                        <S.CheerButton onClick={handleRequestCheer}>응원</S.CheerButton>
                    </S.Content>
                </S.ContentArea>
            </S.Wrapper>
        </>
    );
}

export default Cheer;