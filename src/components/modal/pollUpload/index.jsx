import * as P from "@/apis/poll";
import * as BC from "@/common/basic/BasicComponent";
import * as S from "./styles";
import uploadFile from "@/assets/icon/gallery/upload_file.png";
import { useRef, useState } from "react";

const PollUpload = ({onClose}) => {
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [options, setOptions] = useState(["", ""]);
    const [closedAt, setClosedAt] = useState("");

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

    const handleOptionChange = (index, value) => {
        const updated = [...options];
        updated[index] = value;
        setOptions(updated);
    };


    const handleAddOption = () => {
        setOptions([...options, ""]);
    };

    const handleRemoveOption = (index) => {
        setOptions(options.filter((_, i) => i !== index));
    };

    const requestPollUpload = async () => {
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("closedAt", closedAt);
            if (file) formData.append("file", file);
            options.forEach((opt) => formData.append("options", opt));

            await P.uploadPoll(formData);
            alert("투표가 생성되었습니다!");
            window.location.reload();
        } catch (error) {
            
        }
    };

    return (
        <>
            <S.Wrapper>
                <S.Content>
                    <BC.Text $size={"20px"} $weight={"700"} style={{textAlign: "center", width: "100%"}}>투표 생성</BC.Text>
                    <BC.VerticalWrapper $ai={"flex-start"} $gap={"15px"}>
                        <BC.VerticalWrapper $ai={"flex-start"} $gap={"5px"}>
                            <BC.Text $size={"16px"} $weight={"700"}>제목</BC.Text>
                            <S.InputText value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력해주세요."/>
                        </BC.VerticalWrapper>

                        <BC.VerticalWrapper $ai={"flex-start"}$gap={"5px"}>
                            <BC.Text $size={"16px"} $weight={"700"}>투표 설명</BC.Text>
                            <S.InputText value={description} onChange={(e) => setDescription(e.target.value)} placeholder="유저들이 정확한 투표를 할 수 있도록 자세히 설명해주세요." $height={"100px"} />
                        </BC.VerticalWrapper>

                        <BC.VerticalWrapper $ai={"flex-start"}$gap={"5px"}>
                            <BC.Text $size={"16px"} $weight={"700"}>이미지 첨부(선택)</BC.Text>
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
                        </BC.VerticalWrapper>
                    </BC.VerticalWrapper>

                    <BC.VerticalWrapper $ai={"flex-start"}$gap={"5px"}>
                        <BC.Text $size={"16px"} $weight={"700"}>투표 옵션</BC.Text>
                        {options.map((opt, idx) => (
                            <S.OptionItem key={idx} $gap={"10px"} style={{ alignItems: "center" }}>
                                <S.Index>{idx+1}</S.Index>
                                <S.InputText
                                    value={opt}
                                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                                    placeholder={`옵션 ${idx + 1}`}
                                    style={{ flex: 1 }}
                                />
                                { options.length > 2 &&
                                    <S.Index style={{fontSize: "18px", fontWeight: "600", cursor: "pointer"}}
                                        onClick={() => handleRemoveOption(idx)}
                                    >-</S.Index>
                                }
                            </S.OptionItem>
                        ))}
                        <S.OptionItem $gap={"10px"} style={{ alignItems: "center" }}>
                            { options.length < 10 &&
                                <S.InputText
                                    readOnly
                                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                                    placeholder={`+ 옵션 추가하기`}
                                    style={{textAlign: "center", cursor: "pointer"}}
                                    onClick={handleAddOption}
                                />
                            }
                        </S.OptionItem>
                    </BC.VerticalWrapper>

                    <BC.VerticalWrapper $ai={"flex-start"} $gap={"5px"}>
                        <BC.Text $size={"16px"} $weight={"700"}>투표 마감</BC.Text>
                        <S.InputDate value={closedAt} onChange={(e) => setClosedAt(e.target.value)} placeholder="제목을 입력해주세요."/>
                    </BC.VerticalWrapper>

                    <BC.HorizontalWrapper $gap={"15px"} style={{width: "100%"}}>
                        <BC.HorizontalWrapper $gap={"15px"} style={{width: "100%"}}>
                            <S.Button disabled={
                                title.length < 1 || 
                                description.length < 1 || 
                                options.filter(o => o.trim() !== "").length < 1} $bg={"#C6BC73"}
                                onClick={requestPollUpload}
                            >완료</S.Button>
                            <S.Button $bg={"#d4d4d4ff"} onClick={onClose}>취소</S.Button>
                        </BC.HorizontalWrapper>
                    </BC.HorizontalWrapper>
                </S.Content>
            </S.Wrapper>
        </>
    );
}

export default PollUpload;