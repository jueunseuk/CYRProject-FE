import * as S from "./styles";
import DeleteModal from "@/components/modal/postDelete";
import more from "@/assets/icon/gallery/more.svg";
import cancel from "@/assets/icon/etc/cancel.svg";
import useUserInfo from "@/hooks/localStorage";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ComplaintUpload from "../complaintUpload";

const MoreOptionComment = ({formData, type, onEdit}) => {
    const user = useUserInfo();
    const navigate = useNavigate();
    const location = useLocation();
    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    
    const handleOpenOption = () => {
        setIsOptionOpen((prev) => !prev);
    }

    const handleEdit = () => {
        if (onEdit) onEdit();
        setIsOptionOpen(false);
    };
    
    const handleDelete = () => {
        setIsDeleteModalOpen(true);
    };

    const handleComplaint = () => {
        navigate("/complaint");
    };

    const handleCloseModal = () => {
        setIsDeleteModalOpen(false);
        setIsEditModalOpen(false);
    }
    
    return (
        <>
            {isComplaintModalOpen && <ComplaintUpload onClose={() => setIsComplaintModalOpen(false)} resourceUrl={location.pathname} resourceType={"comment"} />}
            {isDeleteModalOpen && <DeleteModal onClose={handleCloseModal} id={formData.commentId} type={"comment"}/>}
            {isEditModalOpen }
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
                        <S.OptionButton onClick={() => setIsComplaintModalOpen(true)}>댓글 신고</S.OptionButton>
                    </S.OptionBox>
                )}
            </S.MoreOptionWrapper>
        </>
    );
}

export default MoreOptionComment;