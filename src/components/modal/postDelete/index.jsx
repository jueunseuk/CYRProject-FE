import * as G from "@/apis/gallery";
import * as A from "@/apis/announcement";
import * as P from "@/apis/post";
import * as C from "@/apis/comment";
import * as E from "@/apis/event";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({onClose, id, type}) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            if(type === "gallery") {
                await G.deleteGallery(id);
                alert("성공적으로 삭제했습니다.");
                navigate("/gallery");
            }  else if(type === "comment") {
                await C.deleteComment(id);
                window.location.reload();
            } else if(type === "announcement") {
                await A.deleteAnnouncement(id);
                alert("성공적으로 공지사항을 삭제했습니다.\n공지사항 게시판으로 이동합니다.");
                navigate("/announcement");
            } else if(type === "event") {
                await E.deleteEvent(id);
                alert("성공적으로 이벤트를 삭제했습니다.\n이벤트 게시판으로 이동합니다.");
                navigate("/event");
            } else {
                await P.deletePost(id);
                alert("게시글을 성공적으로 삭제했습니다.\n해당 게시판으로 이동합니다.");
                navigate(`/${type}`);
            }
        } catch(error) {

        }
    };

    return (
        <>
            <S.Wrapper>
                <S.Content>
                    <S.Text $size={"20px"} $weight={"600"}>정말로 삭제하시겠습니까?</S.Text>
                    <S.HorizontalWrapper>
                        <S.Button $bg={"#FF3838"} style={{color: "white"}} onClick={handleDelete}>삭제</S.Button>
                        <S.Button $bg={"#E7E7E7"} onClick={onClose}>취소</S.Button>
                    </S.HorizontalWrapper>
                </S.Content>
            </S.Wrapper>
        </>
    )
};

export default DeleteModal;