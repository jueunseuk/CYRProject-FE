import * as S from "./styles";
import cancel from "@/assets/icon/gallery/cancel.svg";
import upload from "@/assets/icon/gallery/upload.svg";
import help from "@/assets/icon/gallery/help.svg";
import uploadFile from "@/assets/icon/gallery/upload_file.png";
import { useRef, useState } from "react";

const MAX_SIZE = 10 * 1024 * 1024;
const MAX_FILES = 10;

const GalleryUpload = ({onClose}) => {
    const fileInputRef = useRef(null);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleClickFileUpload = () => {
        fileInputRef.current.click();
    }

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        if (!files.length) return;
    
        const remainingSlots = MAX_FILES - uploadedFiles.length;
        const selectedFiles = files.slice(0, remainingSlots);
    
        const validFiles = [];
        const previews = [];
    
        selectedFiles.forEach((file) => {
          if (file.size > MAX_SIZE) {
            alert(`${file.name}의 크기가 너무 큽니다.`);
            return;
          }
    
          validFiles.push(file);
          previews.push(URL.createObjectURL(file));
        });
    
        setUploadedFiles((prev) => [...prev, ...validFiles]);
        setImagePreviews((prev) => [...prev, ...previews]);
    
        event.target.value = "";
    };

    return (
        <>
            <S.Wrapper>
                <S.Content>
                    <S.HorizontalWrapper $justify={"space-between"}>
                        <S.Icon src={cancel} onClick={onClose}></S.Icon>
                        <S.Icon src={upload} $width={"25px"} $height={"25px"}></S.Icon>
                        <S.Icon src={help}></S.Icon>
                    </S.HorizontalWrapper>
                    <S.InputArea>
                        <S.HorizontalWrapper>
                            <S.Text $size={"16px"} $weight={"700"}>제목</S.Text>
                        </S.HorizontalWrapper>
                        <S.InputTitle></S.InputTitle>
                    </S.InputArea>
                    <S.InputArea>
                        <S.HorizontalWrapper>
                            <S.Text $size={"16px"} $weight={"700"}>설명</S.Text>
                        </S.HorizontalWrapper>
                        <S.InputDesc></S.InputDesc>
                    </S.InputArea>
                    <S.InputArea>
                        <S.HorizontalWrapper>
                            <S.Text $size={"16px"} $weight={"700"}>파일 업로드</S.Text>
                        </S.HorizontalWrapper>
                        <S.FileArea>
                            <S.FileUploadButton imageUrl={uploadFile} onClick={handleClickFileUpload}></S.FileUploadButton>
                            {imagePreviews.map((url, idx) => (
                                <S.FileItem key={idx} src={url} alt={`preview-${idx}`} />
                            ))}
                        </S.FileArea>
                        <S.FileInput type="file" accept="image/png, image/jpg, image/jpeg" ref={fileInputRef} onChange={handleImageChange}/>
                    </S.InputArea>
                </S.Content>
            </S.Wrapper>
        </>
    );
}

export default GalleryUpload;