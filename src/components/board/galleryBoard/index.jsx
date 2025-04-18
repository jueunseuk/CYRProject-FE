import * as G from "@/apis/gallery";
import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { BOARD_DESCRIPTIONS } from "@/constants/boardsDesc";
import { useEffect, useState } from "react";
import { SkeletonItem } from "@/common/component/Skeleton";
import upload from "@/assets/icon/gallery/upload.svg";
import GalleryUpload from "@/components/modal/galleryUpload";

const GalleryBoard = () => {
    const {subPath} = useParams();
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [sort, setSort] = useState("createdAt");
    const [totalPage, setTotalPage] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [images, setImages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [skeleton, setSkeleton] = useState(true);

    const boardInfo = BOARD_DESCRIPTIONS[subPath];
    const boardId = 4;

    const handleClickSort = (value) => {
        setSort(value);
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleClickPage = (pageNum) => {
        setPage(pageNum-1);
    }

    const handleNavigateGallery = (galleryId) => {
        navigate(`/gallery/${galleryId}`);
    }

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setSkeleton(true);
                const response = await G.getAllGalleryImages({page, sort});
                setImages(response.data.content);
                setTotalElements(response.data.totalElements);
                setTotalPage(response.data.totalPages);
            } catch(error) {
                
            } finally {
                setSkeleton(false);
            }
        };

        fetchImages();
    }, [page, sort]);

    const getPageComponent = () => {
        const pages = Array.from({length: totalPage}, (_, i) => i+1);

        return (
            <>
                {pages.map((pageNum) => (
                        <S.PageButton $weight={page === pageNum-1 ? "700" : "400"} $border={page === pageNum-1 ? "1px" : "0px"} key={pageNum} onClick={() => handleClickPage(pageNum)}>
                            {pageNum}
                        </S.PageButton>
                ))}
            </>
        )
    };

    return (
        <>
            <S.Wrapper>
                {isModalOpen && <GalleryUpload onClose={handleCloseModal} />}
                <S.Title>{boardInfo.label}</S.Title>
                <S.Description>{boardInfo.description}</S.Description>
                <S.Header>
                    <S.TextArea>
                        <S.Text $size={"11px"} $weight={"700"}>{totalElements}</S.Text>
                        <S.Text $size={"11px"}>개의 글</S.Text>
                    </S.TextArea>
                    <S.GalleryUploadButton onClick={handleOpenModal}>
                        <S.Icon src={upload}></S.Icon>유리 사진 업로드
                    </S.GalleryUploadButton>
                    <S.SortArea>
                        <S.Sort onClick={() => handleClickSort("createdAt")} $weight={sort === "createdAt" ? 700 : ""}>New</S.Sort>
                        <S.Text $size={"11px"}>|</S.Text>
                        <S.Sort onClick={() => handleClickSort("picturedAt")} $weight={sort === "picturedAt" ? 700 : ""}>History</S.Sort>
                    </S.SortArea>
                </S.Header>
                <S.Contour />
                <S.GalleryArea>
                    {skeleton ? 
                        (
                            Array.from({length: 16}).map((_, idx) => (
                                <SkeletonItem key={idx}/>
                            ))
                        ) :
                        (
                            images.map((image) => (
                                <S.GalleryItem key={image.galleryImageId} $imageUrl={image.imageUrl} onClick={() => handleNavigateGallery(image.galleryId)}>
                                    <S.OverlayText $size={"15px"} $weight={"700"}>{image.title}</S.OverlayText>
                                    <S.OverlayText $size={"12px"} $weight={"300"}>자세히보기</S.OverlayText>
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
    )
}

export default GalleryBoard;