import * as S from "./styles";
import { useState } from "react";

const CalendarSummary = () => {
    const  [period, setPeriod] = useState("after");

    const handlePeriodClick = (value) => {
        setPeriod(value);
    };

    const getBgColor = (text) => {
        const days = parseInt(text.replace("D-", ""), 10);
      
        if (days <= 3) return "#C6BC73";
        if (days <= 10) return "#C8C09B";
        if (days <= 30) return "#B7B7B7";
        return "#e0e0e0";
    };

    return (
        <>
            <S.Wrapper>
                <S.TitleArea>
                    <S.Text $size={"16px"} $weight={"600"}>일정</S.Text>
                    <S.Text $size={"12px"} $weight={"600"} $color={period === 'after' ? "black" : "#878787"} onClick={() => handlePeriodClick("after")}>다가오는 일정</S.Text>
                    <S.Text $size={"12px"} $weight={"600"} $color={"#878787"}>|</S.Text>
                    <S.Text $size={"12px"} $weight={"600"} $color={period === 'before' ? "black" : "#878787"} onClick={() => handlePeriodClick("before")}>지난 일정</S.Text>
                </S.TitleArea>
                <S.ContentArea>
                    <S.Table>
                        <tbody>
                            <S.Row>
                                <S.Column><S.LeftDays $bg={getBgColor("D-1")}>D-1</S.LeftDays></S.Column>
                                <S.Column>정규 앨범 2집 '안녕 모래들' 발매</S.Column>
                            </S.Row>
                            <S.Row>
                                <S.Column><S.LeftDays $bg={getBgColor("D-3")}>D-3</S.LeftDays></S.Column>
                                <S.Column>정규앨범 2집 기념 단독 콘서트 (3d)</S.Column>
                            </S.Row>
                            <S.Row>
                                <S.Column><S.LeftDays $bg={getBgColor("D-7")}>D-7</S.LeftDays></S.Column>
                                <S.Column>석촌호수 Spring Festival</S.Column>
                            </S.Row>
                            <S.Row>
                                <S.Column><S.LeftDays $bg={getBgColor("D-10")}>D-10</S.LeftDays></S.Column>
                                <S.Column>최유리 27번째 생일 기념 카페 (7d)</S.Column>
                            </S.Row>
                            <S.Row>
                                <S.Column><S.LeftDays $bg={getBgColor("D-30")}>D-30</S.LeftDays></S.Column>
                                <S.Column>어린이대공원 최유리 & 적재 듀엣 공연</S.Column>
                            </S.Row>
                        </tbody>
                    </S.Table>
                </S.ContentArea>
            </S.Wrapper>
        </>
    );
}

export default CalendarSummary;