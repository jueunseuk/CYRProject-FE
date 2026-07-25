import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as SO from "@/apis/song";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "@/util/dateFormatter";

const CREATOR_ROLE_NAME = {
    LYRICS: "작사",
    COMPOSITION: "작곡",
    ARRANGEMENT: "편곡",
    VOCAL: "보컬",
    CHORUS: "코러스",
    INSTRUMENT: "연주",
    MIDI_PROGRAMMING: "미디 프로그래밍",
    SOUND_EFFECTS: "사운드 이펙트",
    STRING_ARRANGEMENT: "스트링 편곡",
    CONDUCTING: "지휘",
    RECORDING: "레코딩",
    MIXING: "믹싱",
    MASTERING: "마스터링",
    PRODUCER: "프로듀서",
    EXECUTIVE_PRODUCER: "총괄 프로듀서",
    A_AND_R: "A&R",
    MANAGEMENT: "매니지먼트",
    DESIGN: "디자인",
    CONTENTS: "콘텐츠",
};

const SongDetail = () => {
    const navigate = useNavigate();
    const { albumId, songId } = useParams();

    const [songData, setSongData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchSong = async () => {
        try {
            setLoading(true);
            const response = await SO.getSongInformation(albumId, songId);
            setSongData(response.data);
        } catch(error) {
            console.error("노래 상세정보 조회 실패", error);
            setSongData(null);
        } finally {
            setLoading(false);
        }
    };

    const groupedCreators = useMemo(() => {
        if(!songData?.creatorResponse) return {};

        return songData.creatorResponse.reduce((groups, creator) => {
            const role = creator.creatorRole;

            if(!groups[role]) {
                groups[role] = [];
            }

            groups[role].push(creator);
            return groups;
        }, {});
    }, [songData]);

    const creatorCount = useMemo(() => {
        if(!songData?.creatorResponse) return 0;

        return new Set(
            songData.creatorResponse.map((creator) => creator.name)
        ).size;
    }, [songData]);

    const handleBack = () => {
        navigate(`/note/album/${albumId}`);
    };

    useEffect(() => {
        fetchSong();
    }, [songId]);

    if(loading) {
        return (
            <S.Wrapper>
                <S.MessageBox>
                    노래 정보를 불러오는 중이에요.
                </S.MessageBox>
            </S.Wrapper>
        );
    }

    if(!songData) {
        return (
            <S.Wrapper>
                <S.BackButton onClick={handleBack}>
                    ← 수록곡 목록
                </S.BackButton>

                <S.MessageBox>
                    노래 정보를 불러오지 못했어요.
                </S.MessageBox>
            </S.Wrapper>
        );
    }

    return (
        <S.Wrapper>
            <S.BackButton onClick={handleBack}>
                ← {songData.albumTitle} 수록곡
            </S.BackButton>

            <S.SongHeader>
                {songData.imageUrl ?
                    <BC.Image
                        src={songData.imageUrl}
                        $w={"160px"}
                        $h={"160px"}
                        $fit={"cover"}
                        style={{ borderRadius: "8px", flexShrink: 0 }}
                    />
                    :
                    <S.SongImagePlaceholder>
                        곡 이미지
                    </S.SongImagePlaceholder>
                }

                <BC.VerticalWrapper $ai={"flex-start"} $gap={"10px"} $w={"auto"}>
                    <BC.HorizontalWrapper $jc={"flex-start"} $gap={"7px"}>
                        <BC.Text $size={"26px"} $weight={"700"}>
                            {songData.title}
                        </BC.Text>

                        {songData.isTitle &&
                            <S.TitleBadge>
                                TITLE
                            </S.TitleBadge>
                        }
                    </BC.HorizontalWrapper>

                    <BC.Text $size={"14px"} $color={"#666"}>
                        {songData.albumTitle}
                    </BC.Text>

                    <BC.Text $size={"13px"} $color={"#888"}>
                        {songData.sequence}번 트랙
                    </BC.Text>

                    <BC.Text $size={"13px"} $color={"#888"}>
                        {formatDate(songData.releasedAt, 10)}
                    </BC.Text>

                    {songData.introduction &&
                        <S.Introduction>
                            {songData.introduction}
                        </S.Introduction>
                    }

                    {songData.link &&
                        <S.MusicLink
                            href={songData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            노래 들으러 가기
                        </S.MusicLink>
                    }
                </BC.VerticalWrapper>
            </S.SongHeader>

            <S.Section>
                <BC.HorizontalWrapper $jc={"space-between"} style={{ width: "100%" }}>
                    <BC.Text $size={"18px"} $weight={"700"}>
                        크레딧
                    </BC.Text>

                    <BC.Text $size={"12px"} $color={"#888"}>
                        참여 인원 {creatorCount}명
                    </BC.Text>
                </BC.HorizontalWrapper>

                {Object.keys(groupedCreators).length > 0 ?
                    <S.CreditBox>
                        {Object.entries(groupedCreators).map(([role, creators]) => (
                            <S.CreditRow key={role}>
                                <BC.Text $size={"13px"} $weight={"600"} $color={"#777"}>
                                    {CREATOR_ROLE_NAME[role] ?? role}
                                </BC.Text>

                                <S.CreatorBox>
                                    {creators.map((creator) => (
                                        <S.CreatorName key={creator.creatorId}>
                                            {creator.name}
                                        </S.CreatorName>
                                    ))}
                                </S.CreatorBox>
                            </S.CreditRow>
                        ))}
                    </S.CreditBox>
                    :
                    <S.EmptySection>
                        등록된 크레딧 정보가 없어요.
                    </S.EmptySection>
                }
            </S.Section>

            <S.Section>
                <BC.Text $size={"18px"} $weight={"700"}>
                    가사
                </BC.Text>

                {songData.lyrics ?
                    <S.Lyrics>
                        {songData.lyrics}
                    </S.Lyrics>
                    :
                    <S.EmptySection>
                        등록된 가사가 없어요.
                    </S.EmptySection>
                }
            </S.Section>
        </S.Wrapper>
    );
};

export default SongDetail;