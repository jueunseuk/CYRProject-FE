import * as G from "@/apis/gallery";
import * as S from "./styles";

const PostDeleteModal = ({onClose, galleryId}) => {

    const handleDeleteGallery = async () => {
        try {
            await G.deleteGallery();
            alert("갤러리를 성공적으로 삭제했습니다.");
            window.location.reload();
        } catch(error) {

        }
    };

    return (
        <>
            <S.Wrapper>
                <S.Content>
                    <S.Text $size={"20px"} $weight={"600"}>정말로 해당 게시글을 삭제하시겠습니까?</S.Text>
                    <S.HorizontalWrapper>
                        <S.Button $bg={"#FF3838"} style={{color: "white"}} onClick={handleDeleteGallery}>삭제</S.Button>
                        <S.Button $bg={"#E7E7E7"} onClick={onClose}>취소</S.Button>
                    </S.HorizontalWrapper>
                </S.Content>
            </S.Wrapper>
        </>
    )
};

export default PostDeleteModal;