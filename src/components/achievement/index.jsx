import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as A from "@/apis/achievement";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACHIEVEMENTS } from "@/constants/achievements";
import { formatDate } from "@/util/dateFormatter";

const AchievementComponent = () => {
    const navigate = useNavigate();
    const [achieveData, setAchieveData] = useState([]);
    const [selectedTap, setSelectedTap] = useState(0);
    const [underline, setUnderline] = useState({ width: 0, offset: 0 });
    const refs = useRef([]);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(100);
    const [sort, setSort] = useState("createdAt");
    const [direction, setDirection] = useState("ASC");
    const [type, setType] = useState(null);

    useEffect(() => {
        if(refs.current[selectedTap]) {
            const el = refs.current[selectedTap];
            setUnderline({
                width: el.offsetWidth,
                offset: el.offsetLeft,
            });
        }
    }, [selectedTap]);

    const fetchAchieveData = async () => {
        try {
            const params = { page, size, sort, direction };

            if (type !== null) {
                params.type = type;
            }

            const response = await A.getAchievementList(params);
            setAchieveData(response.data);
        } catch(error) {
            
        }
    };

    useEffect(() => {
        fetchAchieveData();
    }, [selectedTap, sort, direction, type]);

    return (
        <S.Wrapper>
            <BC.Text $size={"20px"} $weight={"600"} style={{textAlign: "center"}}>업적</BC.Text>
            <S.QuoteWrapper>
                <BC.Text $size={"15px"} $weight={"600"}>모든 업적의 해방 조건은 비공개입니다.</BC.Text>
                <BC.Text $size={"14px"}>단, 사용자끼리 업적 조건을 공유하는 것은 자유입니다.</BC.Text>
            </S.QuoteWrapper>
            <BC.VerticalWrapper>
                <S.TabWrapper>
                    {ACHIEVEMENTS.map((r, idx) => (
                        <S.NavigateText
                            key={r.id}
                            ref={(el) => (refs.current[idx] = el)}
                            $active={selectedTap === idx}
                            onClick={() => {setSelectedTap(idx); setType(r.type); }}>
                            {r.name}
                        </S.NavigateText>
                    ))}
                    <S.Underline $width={underline.width} $offset={underline.offset} />
                </S.TabWrapper>
                <BC.Text style={{textAlign: "left", width: "100%"}}>{ACHIEVEMENTS[selectedTap].description}</BC.Text>
            </BC.VerticalWrapper>
            <BC.VerticalWrapper>
                <BC.Text style={{textAlign: "left", width: "100%"}}>총 <BC.Text $weight={"600"} style={{display: "inline"}}>{achieveData.length}</BC.Text>개의 업적</BC.Text>
                <BC.HorizontalWrapper $jc={"flex-start"} $gap={"7px"} style={{flexWrap: "wrap", width: "100%"}}>
                    {(!achieveData || achieveData.length === 0) ?
                        <BC.EmptyBox $w={"100%"} $h={"100px"}>획득한 업적이 없어요..</BC.EmptyBox>
                        :
                        <>
                            {achieveData.map((a, idx) => (
                                <S.AchievementItem key={a.achievementLogId}>
                                    <BC.Image src={a.imageUrl} $w={"80%"} />
                                    <BC.VerticalWrapper>
                                        <BC.Text $size={"15px"} $weight={"600"}>{a.name}</BC.Text>
                                        <BC.Text $color={"#878787"}>{a.description}</BC.Text>
                                    </BC.VerticalWrapper>
                                    <BC.Text $color={"#878787"}>{formatDate(a.createdAt, 1)}</BC.Text>
                                </S.AchievementItem>
                            ))}
                        </>
                    }
                </BC.HorizontalWrapper>
            </BC.VerticalWrapper>
        </S.Wrapper>
    )
};

export default AchievementComponent;