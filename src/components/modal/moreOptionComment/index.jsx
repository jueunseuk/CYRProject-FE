import * as S from "./styles";
import * as M from "@/apis/manager";
import * as C from "@/apis/comment";
import DeleteModal from "@/components/modal/postDelete";
import more from "@/assets/icon/gallery/more.svg";
import cancel from "@/assets/icon/etc/cancel.svg";
import useUserInfo from "@/hooks/localStorage";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ComplaintUpload from "../complaintUpload";

const MoreOptionComment = ({formData, postData, fetchComment, fetchFixedComment, onEdit}) => {
    const user = useUserInfo();
    const navigate = useNavigate();
    const location = useLocation();
    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);

    const forceDelete = async () => {
        try {
            await M.deleteForce("comment", formData.commentId);
            alert("강제 삭제 완료");
            navigate(-1);
        } catch(error) {

        }
    };
    
    const handleOpenOption = () => {
        setIsOptionOpen((prev) => !prev);
        fetchComment();
        fetchFixedComment();
    };

    const handleEdit = () => {
        if (onEdit) onEdit();
        setIsOptionOpen(false);
    };
    
    const handleDelete = () => {
        setIsDeleteModalOpen(true);
    };

    const handleFixed = async (fixed) => {
        try {
            await C.patchCommentFixed(formData.commentId, fixed);
        } catch(error) {

        }
    };

    const handleCloseModal = () => {
        setIsDeleteModalOpen(false);
        setIsEditModalOpen(false);
    };
    
    return (
        <>
            {isComplaintModalOpen && <ComplaintUpload onClose={() => setIsComplaintModalOpen(false)} resourceUrl={location.pathname} resourceType={"comment"} />}
            {isDeleteModalOpen && <DeleteModal onClose={handleCloseModal} id={formData.commentId} type={"comment"}/>}
            {isEditModalOpen }
            <S.MoreOptionWrapper>
                <S.MoreIcon onClick={handleOpenOption} src={isOptionOpen ? cancel : more} />
                {isOptionOpen && (
                    <S.OptionBox>
                        {postData.userId === user.userId && <S.OptionButton onClick={() => handleFixed(formData.fixed ? false : true)}>{formData.fixed ? "고정 해제" : "고정"}</S.OptionButton>}
                        {(user.userId === formData.authorId || user.userId === formData.userId) && (
                            <>
                                <S.OptionButton onClick={handleEdit}>수정</S.OptionButton>
                                <S.OptionButton onClick={handleDelete}>삭제</S.OptionButton>
                            </>
                        )}
                        {(user.role === "ADMIN" || user.role === "MANAGER") && (
                            <S.OptionButton onClick={forceDelete}>삭제(관리자용)</S.OptionButton>
                        )}
                        <S.OptionButton onClick={() => setIsComplaintModalOpen(true)}>댓글 신고</S.OptionButton>
                    </S.OptionBox>
                )}
            </S.MoreOptionWrapper>
        </>
    );
}

export default MoreOptionComment;