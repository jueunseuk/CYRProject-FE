import * as S from "./styles";
import PostDeleteModal from "@/components/modal/postDelete";
import GalleryUpdate from "@/components/modal/galleryUpdate";
import more from "@/assets/icon/gallery/more.svg";
import useUserInfo from "@/hooks/localStorage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const MoreOption = ({formData}) => {
    const user = useUserInfo();
    const navigate = useNavigate();
    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isCopy, setIsCopy] = useState(false);
    const currentUrl = window.location.href;
    
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

    const handleShareClick = () => {
        setIsOptionOpen(false);
        setIsCopy(true)
        setTimeout(() => {
            setIsCopy(false)
        }, 2000);
    }
    
    return (
        <>
            {isDeleteModalOpen && <PostDeleteModal onClose={handleCloseModal} galleryId={formData.galleryId}/>}
            {isEditModalOpen && <GalleryUpdate onClose={handleCloseModal} prevData={formData}/>}
            <S.MoreOptionWrapper>
                <S.MoreIcon onClick={handleOpenOption} src={more} />
                {isOptionOpen && (
                    <S.OptionBox>
                        {(user.userId === formData.authorId || user.userId === formData.userId) && (
                                <>
                                    <S.OptionButton onClick={handleEditGallery}>수정</S.OptionButton>
                                    <S.OptionButton onClick={handleDeleteGallery}>삭제</S.OptionButton>
                                </>
                            )}
                        <S.OptionButton onClick={handleComplaintGallery}>게시글 신고</S.OptionButton>
                        <CopyToClipboard text={currentUrl} onCopy={handleShareClick}>
                            <S.OptionButton>링크 복사</S.OptionButton>
                        </CopyToClipboard>
                    </S.OptionBox>
                )}
            </S.MoreOptionWrapper>
            <S.ShareResultMessage $copy={isCopy}>클립보드에 복사 완료!</S.ShareResultMessage>
        </>
    );
}

export default MoreOption;