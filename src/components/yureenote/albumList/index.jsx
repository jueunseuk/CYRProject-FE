import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as A from "@/apis/album";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "@/util/dateFormatter";
import { useEffect, useState } from "react";

const AlbumList = () => {
    const navigate = useNavigate();
    const [albumData, setAlbumData] = useState([]);

    const handleAlbumClick = (albumId) => {
        navigate(`/yureenote/albums/${albumId}`);
    };

    const fetchAlbums = async () => {
        try {
            const response = await A.getAllAlbums();
            setAlbumData(response.data);
        } catch (error) {

        }
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    return (
        <S.Wrapper>
            <S.Header>
                <BC.VerticalWrapper $ai={"flex-start"} $gap={"5px"}>
                    <BC.Text $size={"24px"} $weight={"700"}>
                        앨범
                    </BC.Text>
                    <BC.Text $size={"14px"} $color={"#777"}>
                        최유리의 앨범과 수록곡 정보를 확인해보세요.
                    </BC.Text>
                </BC.VerticalWrapper>

                <S.SearchArea>
                    <BC.Input
                        $w={"220px"}
                        $h={"36px"}
                        placeholder={"앨범명을 검색해보세요."}
                    />
                    <S.SearchButton>검색</S.SearchButton>
                </S.SearchArea>
            </S.Header>

            <S.FilterArea>
                <S.FilterButton $active>전체</S.FilterButton>
                <S.FilterButton>정규</S.FilterButton>
                <S.FilterButton>미니</S.FilterButton>
                <S.FilterButton>EP</S.FilterButton>
                <S.FilterButton>싱글</S.FilterButton>
                <S.FilterButton>미발매</S.FilterButton>
            </S.FilterArea>

            <S.AlbumGrid>
                {albumData.map((album) => (
                    <S.AlbumCard key={album.albumId} onClick={() => handleAlbumClick(album.albumId)}>
                        {album.imageUrl ?
                            <BC.Image
                                src={album.imageUrl}
                                $w={"255px"}
                                $h={"255px"}
                                $fit={"cover"}
                            />
                            :
                            <S.ImagePlaceholder>
                                앨범 이미지
                            </S.ImagePlaceholder>
                        }

                        <S.AlbumContent>
                            <BC.HorizontalWrapper $jc={"space-between"} style={{ width: "100%" }}>
                                <BC.Text $size={"12px"} $color={"#8D7D4F"}>
                                    {album.albumType}
                                </BC.Text>
                                <BC.Text $size={"12px"} $color={"#999"}>
                                    {formatDate(album.releasedAt, 2)}
                                </BC.Text>
                            </BC.HorizontalWrapper>

                            <BC.Text $size={"18px"} $weight={"700"}>
                                {album.title}
                            </BC.Text>

                            <BC.Text $size={"13px"} $color={"#666"}>
                                수록곡 {album.songCount}곡
                            </BC.Text>

                            <S.Introduction>
                                {album.introduction}
                            </S.Introduction>
                        </S.AlbumContent>
                    </S.AlbumCard>
                ))}
            </S.AlbumGrid>
        </S.Wrapper>
    );
};

export default AlbumList;