import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as A from "@/apis/album";
import * as SO from "@/apis/song";
import { useNavigate, useParams } from "react-router-dom";

const SongDetail = () => {
    const navigate = useNavigate();
    const { albumId, songId } = useParams();

    const song = {
        songId: Number(songId),
        sequence: 1,
        title: "동그라미",
        albumTitle: "동그라미",
        albumImageUrl: "",
        releasedAt: "2023.07.05",
        titleSong: true,
        lyrics: `난 동그란 마음을 가지고 있어
여기에 노래 가사가 표시됩니다.

줄바꿈도 그대로 유지됩니다.`,
        creators: [
            {
                creatorId: 1,
                name: "최유리",
                role: "LYRICS",
                roleName: "작사",
            },
            {
                creatorId: 2,
                name: "최유리",
                role: "COMPOSITION",
                roleName: "작곡",
            },
            {
                creatorId: 3,
                name: "최유리",
                role: "VOCAL",
                roleName: "보컬",
            },
            {
                creatorId: 4,
                name: "박문치",
                role: "ARRANGEMENT",
                roleName: "편곡",
            },
            {
                creatorId: 5,
                name: "홍소진",
                role: "PIANO",
                roleName: "피아노",
            },
            {
                creatorId: 6,
                name: "곽진언",
                role: "GUITAR",
                roleName: "기타",
            },
            {
                creatorId: 7,
                name: "김대성",
                role: "MIXING",
                roleName: "믹싱",
            },
            {
                creatorId: 8,
                name: "권남우",
                role: "MASTERING",
                roleName: "마스터링",
            },
        ],
    };

    const groupedCreators = song.creators.reduce((groups, creator) => {
        if(!groups[creator.roleName]) {
            groups[creator.roleName] = [];
        }

        groups[creator.roleName].push(creator);
        return groups;
    }, {});

    const handleBack = () => {
        navigate(`/yureenote/albums/${albumId}`);
    };

    return (
        <S.Wrapper>
            <S.BackButton onClick={handleBack}>
                ← {song.albumTitle} 수록곡
            </S.BackButton>

            <S.SongHeader>
                {song.albumImageUrl ?
                    <BC.Image
                        src={song.albumImageUrl}
                        $w={"160px"}
                        $h={"160px"}
                        $fit={"cover"}
                    />
                    :
                    <S.AlbumImagePlaceholder>
                        앨범 이미지
                    </S.AlbumImagePlaceholder>
                }

                <BC.VerticalWrapper $ai={"flex-start"} $gap={"10px"} $w={"auto"}>
                    <BC.HorizontalWrapper $jc={"flex-start"} $gap={"7px"}>
                        <BC.Text $size={"26px"} $weight={"700"}>
                            {song.title}
                        </BC.Text>

                        {song.titleSong && <S.TitleBadge>타이틀</S.TitleBadge>}
                    </BC.HorizontalWrapper>

                    <BC.Text $size={"14px"} $color={"#666"}>
                        {song.albumTitle}
                    </BC.Text>

                    <BC.Text $size={"13px"} $color={"#888"}>
                        {song.sequence}번 트랙
                    </BC.Text>

                    <BC.Text $size={"13px"} $color={"#888"}>
                        {song.releasedAt}
                    </BC.Text>
                </BC.VerticalWrapper>
            </S.SongHeader>

            <S.Section>
                <BC.HorizontalWrapper $jc={"space-between"} style={{ width: "100%" }}>
                    <BC.Text $size={"18px"} $weight={"700"}>
                        크레딧
                    </BC.Text>

                    <BC.Text $size={"12px"} $color={"#888"}>
                        참여 인원 {song.creators.length}명
                    </BC.Text>
                </BC.HorizontalWrapper>

                <S.CreditBox>
                    {Object.entries(groupedCreators).map(([roleName, creators]) => (
                        <S.CreditRow key={roleName}>
                            <BC.Text $size={"13px"} $weight={"600"} $color={"#777"}>
                                {roleName}
                            </BC.Text>

                            <BC.HorizontalWrapper $jc={"flex-start"} $gap={"7px"} style={{ flexWrap: "wrap" }}>
                                {creators.map((creator) => (
                                    <S.CreatorName key={creator.creatorId}>
                                        {creator.name}
                                    </S.CreatorName>
                                ))}
                            </BC.HorizontalWrapper>
                        </S.CreditRow>
                    ))}
                </S.CreditBox>
            </S.Section>

            <S.Section>
                <BC.Text $size={"18px"} $weight={"700"}>
                    가사
                </BC.Text>

                <S.Lyrics>
                    {song.lyrics}
                </S.Lyrics>
            </S.Section>
        </S.Wrapper>
    );
};

export default SongDetail;