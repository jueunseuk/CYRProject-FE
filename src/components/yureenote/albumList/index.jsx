import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as A from "@/apis/album";
import { useNavigate } from "react-router-dom";
import { formatDate } from "@/util/dateFormatter";
import { useEffect, useState } from "react";

const ALBUM_FILTERS = [
    { label: "전체", value: "ALL" },
    { label: "정규", value: "FULL_LENGTH" },
    { label: "EP", value: "EP" },
    { label: "싱글", value: "SINGLE" },
    { label: "OST", value: "OST" },
    { label: "미발매", value: "UNRELEASED" },
];

const AlbumList = () => {
    const navigate = useNavigate();
    const [albumData, setAlbumData] = useState([]);
    const [selectedType, setSelectedType] = useState("ALL");
    const [keyword, setKeyword] = useState("");

    const handleAlbumClick = (albumId) => {
        navigate(`/yureenote/albums/${albumId}`);
    };

    const fetchAlbums = async () => {
        try {
            const response = await A.getAllAlbums();
            setAlbumData(response.data);
        } catch(error) {
            console.error("앨범 목록 조회 실패", error);
            setAlbumData([]);
        }
    };

    const filteredAlbumData = albumData.filter((album) => {
        const matchesType = selectedType === "ALL" || album.albumType === selectedType;
        const matchesKeyword = album.title.toLowerCase().includes(keyword.trim().toLowerCase());

        return matchesType && matchesKeyword;
    });

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
                        value={keyword}
                        placeholder={"앨범명을 검색해보세요."}
                        onChange={(event) => setKeyword(event.target.value)}
                    />

                    <S.SearchButton type="button">
                        검색
                    </S.SearchButton>
                </S.SearchArea>
            </S.Header>

            <S.FilterArea>
                {ALBUM_FILTERS.map((filter) => (
                    <S.FilterButton
                        key={filter.value}
                        $active={selectedType === filter.value}
                        onClick={() => setSelectedType(filter.value)}
                    >
                        {filter.label}
                    </S.FilterButton>
                ))}
            </S.FilterArea>

            {filteredAlbumData.length > 0 ?
                <S.AlbumGrid>
                    {filteredAlbumData.map((album) => (
                        <S.AlbumCard
                            key={album.albumId}
                            onClick={() => handleAlbumClick(album.albumId)}
                        >
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
                                        {ALBUM_FILTERS.find((filter) => filter.value === album.albumType)?.label ?? album.albumType}
                                    </BC.Text>

                                    <BC.Text $size={"12px"} $color={"#999"}>
                                        {formatDate(album.releasedAt, 2)}
                                    </BC.Text>
                                </BC.HorizontalWrapper>

                                <BC.Text $size={"18px"} $weight={"700"}>
                                    {album.title}
                                </BC.Text>

                                <BC.Text $size={"13px"} $color={"#666"}>
                                    수록곡 {album.songCnt}곡
                                </BC.Text>

                                <S.Introduction>
                                    {album.introduction}
                                </S.Introduction>
                            </S.AlbumContent>
                        </S.AlbumCard>
                    ))}
                </S.AlbumGrid>
                :
                <BC.EmptyBox $w={"100%"} $h={"200px"} $size={"14px"}>
                    검색 결과가 없습니다.
                </BC.EmptyBox>
            }
        </S.Wrapper>
    );
};

export default AlbumList;