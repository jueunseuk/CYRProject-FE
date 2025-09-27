import * as P from "@/apis/post";
import * as S from "./styles";
import useUserInfo from "@/hooks/localStorage";
import EditorComponent from "@/components/editor/editorComponent";
import checked from "@/assets/icon/etc/checked.svg";
import unchecked from "@/assets/icon/etc/unchecked.svg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostUpdateEditor = () => {
    const user = useUserInfo();
    const {postId} = useParams();
    const navigate = useNavigate();
    const [skeleton, setSkeleton] = useState(true);
    const [formData, setFormData] = useState({
        boardId: 0,
        title: "",
        content: "",
        locked: "PUBLIC"
    });

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setSkeleton(true);
                const response = await P.getPost(postId);
                setFormData(response.data);
            } catch(error) {

            } finally {
                setSkeleton(false);
            }
        }

        fetchPost();
    }, []);
    
    const handleSelectChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            boardId: e.target.value,
        }));
    };

    const requestUpdatePost = async () => {
        try {
            const response = await P.patchPost(formData);
            alert("게시글 수정 완료!\n작성한 게시글로 이동합니다.");
            navigate(`/${response.data.boardName}/${response.data.postId}`);
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
                <S.Select size={"1"} value={formData.boardId} onChange={handleSelectChange}>
                    {(user?.role === "MANAGER" || user?.role === "ADMIN") && (
                        <S.OptionGroup label="NOTICE">
                            <S.Option value={5}>공지사항</S.Option>
                            <S.Option value={6}>이벤트</S.Option>
                            <S.Option value={7}>캘린더</S.Option>
                            <S.Option value={8}>투표</S.Option>
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
                        <S.Option value={19}>신고하기</S.Option>
                        <S.Option value={20}>운영자 신청</S.Option>
                    </S.OptionGroup>
                </S.Select>
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
                </S.HorizontalWrapper>
                <S.SubmitButton disabled={formData.title.trim().length < 5 || formData.content.trim().length < 30} 
                    onClick={requestUpdatePost}
                >등록</S.SubmitButton>
            </S.Wrapper>
        </>
    )
}

export default PostUpdateEditor;