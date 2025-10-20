import * as C from "@/apis/complaint";
import * as S from "./styles";
import uploadFile from "@/assets/icon/gallery/upload_file.png";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const ComplaintUpload = ({onClose, resourceUrl, resourceType}) => {
    const current = useLocation();
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [reason, setReason] = useState("");
    const [link, setLink] = useState(resourceUrl ? resourceUrl : current.pathname);
    const [type, setType] = useState(resourceType ? resourceType : "post");

    const handleRemoveImage = () => {
        setFile(null);
        setImagePreview(null);
    };

    const handleClickFileUpload = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const previewUrl = URL.createObjectURL(file);
        setFile(file);
        setImagePreview(previewUrl);

        event.target.value = "";
    };

    const requestComplaintUpload = async () => {
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("reason", reason);
            formData.append("link", link);
            formData.append("categoryName", type);
            if (file) formData.append("file", file);

            await C.postComplaint(formData);
            alert("신고가 접수되었습니다.");
            onClose();
        } catch(error) {

        }
    };

    return (
        <>
            <S.Wrapper>
                <S.Content>
                    <S.Text $size={"20px"} $weight={"700"} style={{textAlign: "center", width: "100%"}}>신고하기</S.Text>
                    <S.VerticalWrapper $gap={"15px"}>
                        <S.VerticalWrapper $gap={"5px"}>
                            <S.Text $size={"16px"} $weight={"700"}>제목</S.Text>
                            <S.InputText value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 간단히 입력해주세요."/>
                        </S.VerticalWrapper>
                        <S.VerticalWrapper $gap={"5px"}>
                            <S.Text $size={"16px"} $weight={"700"}>신고 사유</S.Text>
                            <S.InputText value={reason} onChange={(e) => setReason(e.target.value)} placeholder="신고 사유를 자세히 입력해주세요." $height={"100px"} />
                        </S.VerticalWrapper>
                        <S.VerticalWrapper $gap={"5px"}>
                            <S.Text $size={"16px"} $weight={"700"}>신고 유형</S.Text>
                            <S.Select value={type} onChange={(e) => setType(e.target.value)}>
                                <S.Option value="post">게시글</S.Option>
                                <S.Option value="comment">댓글</S.Option>
                                <S.Option value="gallery">갤러리</S.Option>
                                <S.Option value="calendar">캘린더</S.Option>
                                <S.Option value="bug">버그</S.Option>
                                <S.Option value="etc">기타</S.Option>
                            </S.Select>
                        </S.VerticalWrapper>

                        <S.VerticalWrapper $gap={"5px"}>
                            <S.Text $size={"16px"} $weight={"700"}>이미지 첨부</S.Text>
                            <S.FileArea>
                                <S.FileUploadButton $imageUrl={uploadFile} onClick={handleClickFileUpload}></S.FileUploadButton>
                                {imagePreview && (<S.FileItem
                                        src={imagePreview}
                                        alt="preview"
                                        onClick={handleRemoveImage}
                                    />
                                )}
                                <S.FileInput type="file" accept="image/png, image/jpg, image/jpeg" ref={fileInputRef} onChange={handleImageChange}/>
                            </S.FileArea>
                        </S.VerticalWrapper>
                    </S.VerticalWrapper>

                    <S.HorizontalWrapper $jc={"center"} $gap={"15px"} style={{width: "100%"}}>
                        <S.HorizontalWrapper $jc={"center"} $gap={"15px"} style={{width: "100%"}}>
                            <S.Button disabled={title.length < 1 || reason.length < 1 || type.length < 1} $bg={"#C6BC73"} onClick={requestComplaintUpload}>제출</S.Button>
                            <S.Button $bg={"#B7B7B7"} onClick={onClose}>취소</S.Button>
                        </S.HorizontalWrapper>
                    </S.HorizontalWrapper>
                </S.Content>
            </S.Wrapper>
        </>
    );
}

export default ComplaintUpload;