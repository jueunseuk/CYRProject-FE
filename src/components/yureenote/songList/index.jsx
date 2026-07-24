import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import { formatDate } from "@/util/dateFormatter";
import { useNavigate, useParams } from "react-router-dom";

const SongList = () => {
    const navigate = useNavigate();
    const { albumId } = useParams();

    const album = {
        albumId: Number(albumId),
        title: "동그라미",
        releasedAt: "2023.07.05",
        imageUrl: "",
    };

    const songs = [
        {
            songId: 1,
            sequence: 1,
            title: "동그라미",
            titleSong: true,
        },
        {
            songId: 2,
            sequence: 2,
            title: "바람",
            titleSong: false,
        },
    ];

    const handleBack = () => {
        navigate("/yureenote/albums");
    };

    const handleSongClick = (songId) => {
        navigate(`/yureenote/albums/${albumId}/songs/${songId}`);
    };

    return (
        <S.Wrapper>
            <S.BackButton onClick={handleBack}>
                ← 앨범 목록
            </S.BackButton>

            <S.AlbumHeader>
                {album.imageUrl ?
                    <BC.Image src={album.imageUrl} $w={"140px"} $h={"140px"} $fit={"cover"}/>
                    :
                    <S.AlbumImagePlaceholder>
                        앨범 이미지
                    </S.AlbumImagePlaceholder>
                }

                <BC.VerticalWrapper $ai={"flex-start"} $gap={"8px"} $w={"auto"}>
                    <BC.Text $size={"13px"} $color={"#8D7D4F"}>
                        앨범
                    </BC.Text>
                    <BC.Text $size={"25px"} $weight={"700"}>
                        {album.title}
                    </BC.Text>
                    <BC.Text $size={"13px"} $color={"#777"}>
                        {album.releasedAt}
                    </BC.Text>
                </BC.VerticalWrapper>
            </S.AlbumHeader>

            <S.SongBox>
                {songs.map((song) => (
                    <S.SongRow
                        key={song.songId}
                        onClick={() => handleSongClick(song.songId)}
                    >
                        <BC.Text $size={"13px"} $color={"#999"}>
                            {song.sequence}
                        </BC.Text>

                        <BC.HorizontalWrapper $jc={"flex-start"} $gap={"7px"}>
                            <BC.Text $size={"15px"} $weight={"600"}>
                                {song.title}
                            </BC.Text>

                            {song.titleSong && <S.TitleBadge>타이틀</S.TitleBadge>}
                        </BC.HorizontalWrapper>

                        <BC.Text $size={"12px"} $color={"#999"}>
                            창작자 보기 →
                        </BC.Text>
                    </S.SongRow>
                ))}
            </S.SongBox>
        </S.Wrapper>
    );
};

export default SongList;