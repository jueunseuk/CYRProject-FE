import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { BOARD_DESCRIPTIONS } from "@/constants/boardsDesc";
import { useEffect, useState } from "react";
import upload from "@/assets/icon/gallery/upload.svg";
import defaultProfile from "@/assets/image/default_profile.jpg";
import GalleryUpload from "@/components/modal/galleryUpload";

const GalleryBoard = () => {
    const {subPath} = useParams();
    const [page, setPage] = useState(0);
    const [sort, setSort] = useState("createdAt");
    const [totalPage, setTotalPage] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    useEffect(() => {
            const fetchPosts = async () => {
                try {
                    const response = await P.getAllPosts({page, sort});
                    setPosts(response.data.content);
                    setTotalElements(response.data.totalElements);
                    setTotalPage(response.data.totalPages);
                } catch(error) {
                    
                }
            }
            fetchPosts();
        }, [page, sort, subPath]);

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
                    <S.GalleryItem imageUrl={defaultProfile}>
                        <S.OverlayText $size={"15px"} $weight={"700"}>인스타 스토리에 올라온 율님 셀카</S.OverlayText>
                        <S.OverlayText $size={"12px"} $weight={"300"}>자세히보기</S.OverlayText>
                    </S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                    <S.GalleryItem imageUrl={defaultProfile}></S.GalleryItem>
                </S.GalleryArea>
            </S.Wrapper>
        </>
    )
}

export default GalleryBoard;