import * as S from "./styles";
import { BOARD_DESCRIPTIONS } from "@/constants/boardsDesc";
import { formatDate } from "@/util/dateFormatter";
import { useParams } from "react-router-dom";
import defaultProfile from "@/assets/image/default_profile.jpg";
import attendanceBlack from "@/assets/icon/attendance/attendance_black.svg";
import clock from "@/assets/icon/attendance/clock.svg";
import pencil from "@/assets/icon/attendance/pencil.svg";

const AttendanceBoard = () => {
    const {subPath} = useParams();

    const boardInfo = BOARD_DESCRIPTIONS[subPath];
    const boardId = 3;

    const now = new Date();
    const day = now.getDay();

    let date = [];
    for(let i = 0; i <= 7; i++){
        const copy = new Date(now);
        copy.setDate(now.getDate() - 4 + i);
        date.push(copy);
    }

    return (
        <>
            <S.Wrapper>
                <S.Title>{boardInfo.label}</S.Title>
                <S.Description>{boardInfo.description}</S.Description>
                <S.VerticalWrapper>
                    <S.Text $size={"28px"} $weight={"700"}>{formatDate(new Date(), 5)}</S.Text>

                    <S.HorizontalWrapper>
                        <S.TextBox>#4월 출석자 수 : 226</S.TextBox>
                        <S.TextBox>#전월 대비 상승 : +14</S.TextBox>
                        <S.TextBox>#출석 기여 수 : 3</S.TextBox>
                    </S.HorizontalWrapper>

                    <S.Table>
                        <colgroup>
                            <col style={{ width: "14.28%" }} />
                            <col style={{ width: "14.28%" }} />
                            <col style={{ width: "14.28%" }} />
                            <col style={{ width: "14.28%" }} />
                            <col style={{ width: "14.28%" }} />
                            <col style={{ width: "14.28%" }} />
                            <col style={{ width: "14.28%" }} />
                        </colgroup>
                        <thead>
                            <S.Row style={{fontWeight: "700"}}>
                                <S.Column $isToday={day === 0} $color={"red"}>일</S.Column>
                                <S.Column $isToday={day === 1}>월</S.Column>
                                <S.Column $isToday={day === 2}>화</S.Column>
                                <S.Column $isToday={day === 3}>수</S.Column>
                                <S.Column $isToday={day === 4}>목</S.Column>
                                <S.Column $isToday={day === 5}>금</S.Column>
                                <S.Column $isToday={day === 6} $color={"blue"}>토</S.Column>
                            </S.Row>
                        </thead>
                        <tbody>
                            <S.Row>
                                <S.Column $isToday={day === 0}><S.TableBox>
                                    <S.Text $color={"red"} $weight={"700"}>{date[0].getDate()}</S.Text>
                                    <S.Text>102명</S.Text>
                                </S.TableBox></S.Column>
                                <S.Column $isToday={day === 1}><S.TableBox>
                                    <S.Text $weight={"700"}>{date[1].getDate()}</S.Text>
                                    <S.Text>96명</S.Text>
                                </S.TableBox></S.Column>
                                <S.Column $isToday={day === 2}><S.TableBox>
                                    <S.Text $weight={"700"}>{date[2].getDate()}</S.Text>
                                    <S.Text>103명</S.Text>
                                </S.TableBox></S.Column>
                                <S.Column $isToday={day === 3}><S.TableBox>
                                    <S.Text $weight={"700"}>{date[3].getDate()}</S.Text>
                                    <S.Text>162명</S.Text>
                                </S.TableBox></S.Column>
                                <S.Column $isToday={day === 4}><S.TableBox>
                                    <S.Text $weight={"700"}>{date[4].getDate()}</S.Text>
                                    <S.Text>23명</S.Text>
                                </S.TableBox></S.Column>
                                <S.Column $isToday={day === 5}><S.TableBox>
                                    <S.Text $weight={"700"}>{date[5].getDate()}</S.Text>
                                    <S.Text></S.Text>
                                </S.TableBox></S.Column>
                                <S.Column $isToday={day === 6}><S.TableBox>
                                    <S.Text $color={"blue"} $weight={"700"}>{date[6].getDate()}</S.Text>
                                    <S.Text></S.Text>
                                </S.TableBox></S.Column>
                            </S.Row>
                        </tbody>
                    </S.Table>

                    <S.AttendanceArea>
                        <S.HorizontalWrapper style={{marginBottom: "5px"}}>
                            <S.InputField />
                            <S.AttendanceButton>출석하기</S.AttendanceButton>
                        </S.HorizontalWrapper>
                        <S.Text $color={"#878787"} $size={"11px"}>출석과 함께 하고 싶은 말을 남겨보세요! 매일 출석하면 경험치를 얻을 수 있습니다.</S.Text>
                    </S.AttendanceArea>

                    <S.AttendanceBlock>
                        <S.UserProfile src={defaultProfile}/>
                        <S.ContentBox>
                            <S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={pencil} />
                                    <S.Text $weight={"700"}>말랑준듀</S.Text>
                                </S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={clock} />
                                    <S.Text $color={"#878787"} $size={"12px"}>15:24:38</S.Text>
                                </S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={attendanceBlack} />
                                    <S.Text $size={"12px"}>162</S.Text>
                                </S.HorizontalWrapper>
                            </S.HorizontalWrapper>
                            <S.AttendanceTextBox>오늘도 출석 성공!! 연속 100일 가즈아~!</S.AttendanceTextBox>
                        </S.ContentBox>
                    </S.AttendanceBlock>
                    <S.AttendanceBlock>
                        <S.UserProfile src={defaultProfile}/>
                        <S.ContentBox>
                            <S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={pencil} />
                                    <S.Text $weight={"700"}>말랑준듀</S.Text>
                                </S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={clock} />
                                    <S.Text $color={"#878787"} $size={"12px"}>15:24:38</S.Text>
                                </S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={attendanceBlack} />
                                    <S.Text $size={"12px"}>162</S.Text>
                                </S.HorizontalWrapper>
                            </S.HorizontalWrapper>
                            <S.AttendanceTextBox>오늘도 출석 성공!! 연속 100일 가즈아~!</S.AttendanceTextBox>
                        </S.ContentBox>
                    </S.AttendanceBlock>
                    <S.AttendanceBlock>
                        <S.UserProfile src={defaultProfile}/>
                        <S.ContentBox>
                            <S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={pencil} />
                                    <S.Text $weight={"700"}>말랑준듀</S.Text>
                                </S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={clock} />
                                    <S.Text $color={"#878787"} $size={"12px"}>15:24:38</S.Text>
                                </S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={attendanceBlack} />
                                    <S.Text $size={"12px"}>162</S.Text>
                                </S.HorizontalWrapper>
                            </S.HorizontalWrapper>
                            <S.AttendanceTextBox>오늘도 출석 성공!! 연속 100일 가즈아~!</S.AttendanceTextBox>
                        </S.ContentBox>
                    </S.AttendanceBlock>
                    <S.AttendanceBlock>
                        <S.UserProfile src={defaultProfile}/>
                        <S.ContentBox>
                            <S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={pencil} />
                                    <S.Text $weight={"700"}>말랑준듀</S.Text>
                                </S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={clock} />
                                    <S.Text $color={"#878787"} $size={"12px"}>15:24:38</S.Text>
                                </S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={attendanceBlack} />
                                    <S.Text $size={"12px"}>162</S.Text>
                                </S.HorizontalWrapper>
                            </S.HorizontalWrapper>
                            <S.AttendanceTextBox>오늘도 출석 성공!! 연속 100일 가즈아~!</S.AttendanceTextBox>
                        </S.ContentBox>
                    </S.AttendanceBlock>
                    <S.AttendanceBlock>
                        <S.UserProfile src={defaultProfile}/>
                        <S.ContentBox>
                            <S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={pencil} />
                                    <S.Text $weight={"700"}>말랑준듀</S.Text>
                                </S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={clock} />
                                    <S.Text $color={"#878787"} $size={"12px"}>15:24:38</S.Text>
                                </S.HorizontalWrapper>
                                <S.HorizontalWrapper $gap={"5px"}>
                                    <S.IconArea src={attendanceBlack} />
                                    <S.Text $size={"12px"}>162</S.Text>
                                </S.HorizontalWrapper>
                            </S.HorizontalWrapper>
                            <S.AttendanceTextBox>오늘도 출석 성공!! 연속 100일 가즈아~!</S.AttendanceTextBox>
                        </S.ContentBox>
                    </S.AttendanceBlock>
                </S.VerticalWrapper>
            </S.Wrapper>
        </>
    )
}

export default AttendanceBoard;