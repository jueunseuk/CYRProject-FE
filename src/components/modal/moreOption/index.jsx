import * as S from "./styles";
import PostDeleteModal from "@/components/modal/postDelete";
import GalleryUpdate from "@/components/modal/galleryUpdate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MoreOption = ({formData}) => {
    const navigate = useNavigate();
    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleOpenOption = () => {
        setIsOptionOpen((prev) => !prev);
    }

    const handleEditGallery = () => {
        setIsEditModalOpen(true);
    };
    
    const handleDeleteGallery = () => {
        setIsDeleteModalOpen(true);
    };

    const handleComplaintGallery = () => {
        navigate("/complaint");
    };

    const handleCloseModal = () => {
        setIsDeleteModalOpen(false);
        setIsEditModalOpen(false);
    }
    
    return (
        <>
            {isDeleteModalOpen && <PostDeleteModal onClose={handleCloseModal} galleryId={formData.galleryId}/>}
            {isEditModalOpen && <GalleryUpdate onClose={handleCloseModal} prevData={formData}/>}
            <S.MoreOptionWrapper>
                <S.MoreIcon onClick={handleOpenOption}>
                    {isOptionOpen && (
                        <S.OptionBox>
                            <S.OptionButton onClick={handleEditGallery}>수정</S.OptionButton>
                            <S.OptionButton onClick={handleDeleteGallery}>삭제</S.OptionButton>
                            <S.OptionButton onClick={handleComplaintGallery}>게시글 신고</S.OptionButton>
                        </S.OptionBox>
                    )}
                </S.MoreIcon>
            </S.MoreOptionWrapper>
        </>
    );
}

export default MoreOption;