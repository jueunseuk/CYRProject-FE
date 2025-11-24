import * as A from "@/apis/announcement";
import * as P from "@/apis/post";
import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import useUserInfo from "@/hooks/localStorage";
import EditorComponent from "@/components/editor/editorComponent";
import checked from "@/assets/icon/etc/checked.svg";
import unchecked from "@/assets/icon/etc/unchecked.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostEditor = ({requestBoard}) => {
    const user = useUserInfo();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        boardId: requestBoard || 9,
        title: "",
        content: "",
        locked: "PUBLIC"
    });
    const [announcementCategoryId, setAnnouncementCategoryId] = useState(1);
    const [eventCategoryId, setEventCategoryId] = useState(1);
    const [fix, setFix] = useState(false);
    
    const handleSelectChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            boardId: e.target.value,
        }));
    };

    const requestUploadPost = async () => {
        try {
            if(formData.boardId === "5") {
                const response = await A.uploadAnnouncement({...formData, announcementCategoryId, fix});
                alert("게시글 업로드 완료!\n작성한 게시글로 이동합니다.");
                navigate(`/announcement/${response.data.announcementId}`);
            } else {
                const response = await P.requestPost(formData);
                alert("게시글 업로드 완료!\n작성한 게시글로 이동합니다.");
                navigate(`/${response.data.boardName}/${response.data.postId}`);
            }
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
                    <S.Select size={"1"} value={formData.boardId} onChange={handleSelectChange}>
                        {(user?.role === "MANAGER" || user?.role === "ADMIN") && (
                            <S.OptionGroup label="NOTICE">
                                <S.Option value={5}>공지사항</S.Option>
                                <S.Option value={6}>이벤트</S.Option>
                            </S.OptionGroup>
                        )}
                        <S.OptionGroup label="모래 이야기">
                            <S.Option value={9}>자유게시판</S.Option>
                            <S.Option value={10}>질문게시판</S.Option>
                            <S.Option value={11}>내가 그린 유리</S.Option>
                            <S.Option value={12}>내가 부른 유리</S.Option>
                            <S.Option value={13}>To. 유리</S.Option>
                        </S.OptionGroup>
                        <S.OptionGroup label="유리 이야기">
                            <S.Option value={14}>내가 좋아하는 유리 노래</S.Option>
                            <S.Option value={15}>미발매곡 가사 탐구</S.Option>
                            <S.Option value={16}>콘서트 후기</S.Option>
                            <S.Option value={17}>굿즈 후기</S.Option>
                        </S.OptionGroup>
                        <S.OptionGroup label="커뮤니티 이야기">
                            <S.Option value={18}>건의하기</S.Option>
                        </S.OptionGroup>
                    </S.Select>
                    {formData.boardId === "5" && 
                        <S.Select size={"1"} value={announcementCategoryId} onChange={(e) => setAnnouncementCategoryId(e.target.value)}>
                            <S.Option value={1}>커뮤니티 공지</S.Option>
                            <S.Option value={2}>일정 공지</S.Option>
                            <S.Option value={3}>이벤트 공지</S.Option>
                            <S.Option value={4}>긴급 공지</S.Option>
                            <S.Option value={5}>기타</S.Option>
                        </S.Select>
                    }
                    {formData.boardId === "6" &&
                        <S.Select size={"1"} value={eventCategoryId} onChange={(e) => setEventCategoryId(e.target.value)}>
                            <S.Option value={1}>일반</S.Option>
                            <S.Option value={2}>선착순</S.Option>
                            <S.Option value={3}>추첨</S.Option>
                            <S.Option value={4}>조건</S.Option>
                            <S.Option value={5}>기타</S.Option>
                        </S.Select>
                    }
                </BC.HorizontalWrapper>
                <S.Input 
                    style={{marginTop: "5px", marginBottom: "5px"}}
                    type="text" 
                    name="title" 
                    $width={"100%"} 
                    $border={"#CCC"} 
                    placeholder="제목을 입력하세요..."
                    onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))} />
                <EditorComponent
                    value={formData.content}
                    onChange={(value) => setFormData((prev) => ({ ...prev, content: value }))}
                />
                <S.HorizontalWrapper>
                    <S.Icon 
                        src={formData.locked === "PUBLIC" ? unchecked : checked}
                        onClick={() => setFormData((prev) => ({...prev, locked: prev.locked === "PUBLIC" ? "PRIVATE" : "PUBLIC"}))}
                        style={{cursor: "pointer"}}
                    />
                    <S.Text $size={"14px"} $weight={"600"}>나만보기</S.Text>
                    {formData.boardId === "5" && 
                        <>
                            <S.Icon 
                                src={fix ? checked : unchecked}
                                onClick={() => setFix(!fix)}
                                style={{cursor: "pointer"}}
                            />
                            <S.Text $size={"14px"} $weight={"600"}>고정</S.Text>
                        </>
                    }
                </S.HorizontalWrapper>
                <S.SubmitButton disabled={formData.title.trim().length < 5 || formData.content.trim().length < 30} 
                    onClick={requestUploadPost}
                >등록</S.SubmitButton>
            </S.Wrapper>
        </>
    )
}

export default PostEditor;