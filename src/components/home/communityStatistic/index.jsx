import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as ST from "@/apis/statistic";
import { useEffect, useState } from "react";
import { formatDate } from "@/util/dateFormatter";

const CommunityStatistic = () => {
    const [statisticData, setStatisticData] = useState({});
    useEffect(() => {
        const fetchStatistic = async () => {
            try {
                const response = await ST.getStatistic();
                setStatisticData(response);
            } catch(error) {

            }
        };

        fetchStatistic();
    }, []);

    return (
        <S.Wrapper>
            <BC.VerticalWrapper $gap={"3px"}>
                <BC.Text $size={"16px"} $weight={"600"}>커뮤니티 통계</BC.Text>
                <BC.Text $size={"11px"} $color={"#878787"}>{formatDate(statisticData.createdAt, 4)}</BC.Text>
            </BC.VerticalWrapper>
            <BC.VerticalWrapper $gap={"5px"}>
                <S.ItemWrapper>
                    <BC.Text>총 회원 수</BC.Text>
                    <S.DotLine />
                    <BC.Text>{statisticData.totalMember}</BC.Text>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <BC.Text>오늘 가입한 회원 수</BC.Text>
                    <S.DotLine />
                    <BC.Text>{statisticData.todayMember}</BC.Text>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <BC.Text>총 게시글 수</BC.Text>
                    <S.DotLine />
                    <BC.Text>{statisticData.totalPost}</BC.Text>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <BC.Text>오늘 올라온 게시글 수</BC.Text>
                    <S.DotLine />
                    <BC.Text>{statisticData.todayPost}</BC.Text>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <BC.Text>총 댓글 수</BC.Text>
                    <S.DotLine />
                    <BC.Text>{statisticData.totalComment}</BC.Text>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <BC.Text>오늘 올라온 댓글 수</BC.Text>
                    <S.DotLine />
                    <BC.Text>{statisticData.todayComment}</BC.Text>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <BC.Text>총 갤러리 수</BC.Text>
                    <S.DotLine />
                    <BC.Text>{statisticData.totalGallery}</BC.Text>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <BC.Text>오늘 올라온 갤러리 수</BC.Text>
                    <S.DotLine />
                    <BC.Text>{statisticData.todayGallery}</BC.Text>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <BC.Text>총 유리 변환 횟수</BC.Text>
                    <S.DotLine />
                    <BC.Text>{statisticData.totalConvert}</BC.Text>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <BC.Text>오늘 유리 변환된 횟수</BC.Text>
                    <S.DotLine />
                    <BC.Text>{statisticData.todayConvert}</BC.Text>
                </S.ItemWrapper>
            </BC.VerticalWrapper>
        </S.Wrapper>
    );
}

export default CommunityStatistic;