import * as A from "@/apis/announcement";
import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import useUserInfo from "@/hooks/localStorage";
import EditorComponent from "@/components/editor/editorComponent";
import checked from "@/assets/icon/etc/checked.svg";
import unchecked from "@/assets/icon/etc/unchecked.svg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AnnouncementUpdateEditor = () => {
    const user = useUserInfo();
    const {postId} = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        boardId: 5,
        title: "",
        content: "",
        locked: "PUBLIC",
        announcementCategoryId: 1,
        fix: false
    });

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await A.getAnnouncement(postId);
                setFormData(response.data);
            } catch(error) {

            } finally {
                
            }
        }

        fetchPost();
    }, []);
    
    const handleSelectChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            announcementCategoryId: value,
        }));
    };


    const requestUpdatePost = async () => {
        try {
            const response = await A.updateAnnouncement(postId, formData);
            alert("공지 수정 완료!\n작성한 공지사항으로 이동합니다.");
            navigate(`/announcement/${response.data.announcementId}`);
        } catch(error) {

        }
    }
    
    useEffect(() => {
        const handleBeforeUnload = (e) => {
          e.preventDefault();
          e.returnValue = "";
        };
      
        window.addEventListener("beforeunload", handleBeforeUnload);
      
        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    return (
        <>
            <S.Wrapper>
                <BC.HorizontalWrapper $gap={"10px"}>
                    <S.Select size={"1"} value={formData.announcementCategoryId} onChange={(e) => handleSelectChange(Number(e.target.value))}>
                        <S.Option value={1}>커뮤니티 공지</S.Option>
                        <S.Option value={2}>일정 공지</S.Option>
                        <S.Option value={3}>이벤트 공지</S.Option>
                        <S.Option value={4}>긴급 공지</S.Option>
                        <S.Option value={5}>기타</S.Option>
                    </S.Select>
                </BC.HorizontalWrapper>
                <S.Input 
                    style={{marginTop: "5px", marginBottom: "5px"}}
                    type="text" 
                    name="title" 
                    $width={"100%"} 
                    $border={"#CCC"} 
                    placeholder="제목을 입력하세요..."
                    value={formData.title}
                    onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))} />
                <EditorComponent
                    value={formData.content}
                    onChange={(value) => setFormData((prev) => ({ ...prev, content: value }))}
                />
                <S.HorizontalWrapper>
                    <S.Icon 
                        src={formData.locked === "PUBLIC" ? unchecked : checked}
                        onClick={() => setFormData((prev) => ({...prev, locked: prev.locked === "PUBLIC" ? "PRIVATE" : "PUBLIC"}))}
                    />
                    <S.Text $size={"14px"} $weight={"600"}>나만보기</S.Text>
                    <S.Icon 
                        src={formData.fix ? checked : unchecked}
                        onClick={() => setFormData((prev) => ({...prev, fix: !prev.fix}))}
                        style={{cursor: "pointer"}}
                    />
                    <S.Text $size={"14px"} $weight={"600"}>고정</S.Text>
                </S.HorizontalWrapper>
                <S.SubmitButton disabled={formData.title.trim().length < 5 || formData.content.trim().length < 30} 
                    onClick={requestUpdatePost}
                >등록</S.SubmitButton>
            </S.Wrapper>
        </>
    )
}

export default AnnouncementUpdateEditor;