import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as A from "@/apis/album";
import * as SO from "@/apis/song";
import { formatDate } from "@/util/dateFormatter";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SongList = () => {
    const navigate = useNavigate();
    const [albumData, setAlbumData] = useState();
    const [songData, setSongData] = useState([]);
    const { albumId } = useParams();

    const fetchAlbum = async () => {
        try {
            const response = await A.getAlbum(albumId);
            setAlbumData(response.data);
        } catch (error) {

        }
    };

    const fetchSongs = async () => {
        try {
            const response = await SO.getAllSongsByAlbum(albumId);
            setSongData(response.data);
        } catch (error) {

        }
    };
    
    useEffect(() => {
        fetchAlbum();
        fetchSongs();
    }, []);

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
                {albumData?.imageUrl ?
                    <BC.Image src={albumData.imageUrl} $w={"140px"} $h={"140px"} $fit={"cover"}/>
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
                        {albumData?.title}
                    </BC.Text>
                    <BC.Text $size={"13px"} $color={"#777"}>
                        {formatDate(albumData?.releasedAt, 10)}
                    </BC.Text>
                    <BC.Text $size={"13px"} $color={"#777"} style={{lineHeight: "19px"}}>
                        {albumData?.introduction}
                    </BC.Text>
                </BC.VerticalWrapper>
            </S.AlbumHeader>

            <S.SongBox>
                {songData.map((song) => (
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
                            자세히 →
                        </BC.Text>
                    </S.SongRow>
                ))}
            </S.SongBox>
        </S.Wrapper>
    );
};

export default SongList;