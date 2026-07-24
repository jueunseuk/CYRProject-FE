import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "@/util/dateFormatter";
import { useState } from "react";

const albums = [
    {
        albumId: 1,
        title: "동그라미",
        albumType: "정규",
        releasedAt: "2023.07.05",
        publisher: "카카오엔터테인먼트",
        agency: "네이브",
        imageUrl: "",
        introduction: "최유리의 감성과 이야기를 담아낸 앨범입니다.",
        songCount: 10,
    },
    {
        albumId: 2,
        title: "욕심의 반대편으로",
        albumType: "EP",
        releasedAt: "2022.05.26",
        publisher: "카카오엔터테인먼트",
        agency: "네이브",
        imageUrl: "",
        introduction: "따뜻한 목소리와 섬세한 가사가 담긴 앨범입니다.",
        songCount: 6,
    },
];

const AlbumList = () => {
    const navigate = useNavigate();
    const [albumData, setAlbumData] = useState(albums);

    const handleAlbumClick = (albumId) => {
        navigate(`/yureenote/albums/${albumId}`);
    };

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
                                $w={"100%"}
                                $h={"100%"}
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
                                    {album.releasedAt}
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

                            <BC.Contour $bg={"#eee"}/>

                            <BC.VerticalWrapper $ai={"flex-start"} $gap={"4px"}>
                                <BC.Text $size={"12px"} $color={"#888"}>
                                    기획사 · {album.agency}
                                </BC.Text>
                                <BC.Text $size={"12px"} $color={"#888"}>
                                    유통사 · {album.publisher}
                                </BC.Text>
                            </BC.VerticalWrapper>
                        </S.AlbumContent>
                    </S.AlbumCard>
                ))}
            </S.AlbumGrid>
        </S.Wrapper>
    );
};

export default AlbumList;