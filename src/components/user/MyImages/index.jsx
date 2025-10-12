import * as U from "@/apis/user";
import * as S from "./styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatDate } from "@/util/dateFormatter";
import useUserInfo from "@/hooks/localStorage";

const MyImages = () => {
    const user = useUserInfo();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    const [sort, setSort] = useState("createdAt");
    const [totalPage, setTotalPage] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [images, setImages] = useState([]);

    const handleClickSort = (value) => {
        setSort(value);
    };

    const handleClickPage = (pageNum) => {
        setSearchParams({ page: pageNum });
    };

    const handleNavigateGallery = (galleryId) => {
        navigate(`/gallery/${galleryId}`);
    };

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await U.getUserImages(user.userId, {page: page > 0 ? page - 1 : 0, sort});
                setImages(response.data.content);
                setTotalElements(response.data.totalElements);
                setTotalPage(response.data.totalPages);

            } catch(error) {
                
            }
        };

        fetchImages();
    }, [searchParams, sort]);

    const getPageComponent = () => {
        const pages = Array.from({length: totalPage}, (_, i) => i+1);

        return (
            <>
                {pages.map((pageNum) => (
                        <S.PageButton $weight={page === pageNum ? "700" : "400"} $border={page === pageNum ? "1px" : "0px"} key={pageNum} onClick={() => handleClickPage(pageNum)}>
                            {pageNum}
                        </S.PageButton>
                ))}
            </>
        )
    };

    return (
        <>
            <S.Wrapper>
                <S.Title>내가 올린 사진</S.Title>
                <S.Description>내가 지금까지 갤러리에 올린 유리의 사진들을 모아서 볼 수 있어요.</S.Description>
                <S.Header>
                    <S.TextArea>
                        <S.Text $size={"11px"} $weight={"700"}>{totalElements}</S.Text>
                        <S.Text $size={"11px"}>개의 사진</S.Text>
                    </S.TextArea>
                    <S.SortArea>
                        <S.Sort title="최근에 찍은 사진 순으로 정렬" onClick={() => handleClickSort("createdAt")} $weight={sort === "createdAt" ? 700 : ""}>New</S.Sort>
                        <S.Text $size={"11px"}>|</S.Text>
                        <S.Sort title="사용자의 최근 업로드 순으로 정렬" onClick={() => handleClickSort("picturedAt")} $weight={sort === "picturedAt" ? 700 : ""}>History</S.Sort>
                    </S.SortArea>
                </S.Header>
                <S.Contour />
                <S.GalleryArea>
                    {images?.length === 0 ? 
                        (
                            <S.EmptyData>아직 아무런 사진이 없어요..</S.EmptyData>
                        ) :
                        (
                            images.map((image) => (
                                <S.GalleryItem key={image.galleryImageId} $imageUrl={image.imageUrl} onClick={() => handleNavigateGallery(image.galleryId)}>
                                    <S.OverlayText $size={"15px"} $weight={"600"} style={{borderBottom: "1px solid #dadadaff", borderTop: "1px solid #dadadaff", padding: "7px 0"}}>{image.title}</S.OverlayText>
                                    <S.OverlayText $size={"12px"} $weight={"300"} style={{color: "#dadadaff"}}>{formatDate(image.pictureAt, 2)}</S.OverlayText>
                                </S.GalleryItem>
                            ))
                        )
                    }
                </S.GalleryArea>
                <S.PaginationArea>
                    {getPageComponent()}
                </S.PaginationArea>
            </S.Wrapper>
        </>
    );
};

export default MyImages;