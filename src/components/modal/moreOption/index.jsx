import * as S from "./styles";
import DeleteModal from "@/components/modal/postDelete";
import GalleryUpdate from "@/components/modal/galleryUpdate";
import more from "@/assets/icon/gallery/more.svg";
import cancel from "@/assets/icon/etc/cancel.svg";
import useUserInfo from "@/hooks/localStorage";
import ComplaintUpload from "../complaintUpload";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const MoreOption = ({formData, type}) => {
    const user = useUserInfo();
    const navigate = useNavigate();
    const location = useLocation();
    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);
    const [isCopy, setIsCopy] = useState(false);
    const currentUrl = window.location.href;
    
    const handleOpenOption = () => {
        setIsOptionOpen((prev) => !prev);
    }

    const handleEdit = () => {
        if (type === "gallery") {
            setIsEditModalOpen(true);
        } else {
            navigate(`/edit/post/${formData.postId}`);
        }
    };
    
    const handleDelete = () => {
        setIsDeleteModalOpen(true);
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
            {isComplaintModalOpen && <ComplaintUpload onClose={() => setIsComplaintModalOpen(false)} resourceUrl={location.pathname} resourceType={"post"} />}
            {isDeleteModalOpen && <DeleteModal onClose={handleCloseModal} id={type === "gallery" ? formData.galleryId : formData.postId} type={type}/>}
            {isEditModalOpen && (
                type === "gallery" 
                    ? <GalleryUpdate onClose={handleCloseModal} prevData={formData} /> : null)}
            <S.MoreOptionWrapper>
                <S.MoreIcon onClick={handleOpenOption} src={isOptionOpen ? cancel : more} />
                {isOptionOpen && (
                    <S.OptionBox>
                        {(user.userId === formData.authorId || user.userId === formData.userId) && (
                                <>
                                    <S.OptionButton onClick={handleEdit}>수정</S.OptionButton>
                                    <S.OptionButton onClick={handleDelete}>삭제</S.OptionButton>
                                </>
                            )}
                        <S.OptionButton onClick={() => setIsComplaintModalOpen(true)}>게시글 신고</S.OptionButton>
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