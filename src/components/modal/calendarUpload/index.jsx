import * as C from "@/apis/calendar";
import * as S from "./styles";
import cancel from "@/assets/icon/gallery/cancel.svg";
import upload from "@/assets/icon/gallery/upload.svg";
import help from "@/assets/icon/gallery/help.svg";
import uploadFile from "@/assets/icon/gallery/upload_file.png";
import { useRef, useState } from "react";

const now = new Date();
const pad = (n) => n.toString().padStart(2, '0');
const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

const CalendarUpload = ({onClose}) => {
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link1, setLink1] = useState("");
    const [link2, setLink2] = useState("");
    const [date, setDate] = useState(today);
    const [type, setType] = useState("BROADCAST");
    
    const requestCalenarUpload = async () => {
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("date", date);
            formData.append("type", type);
            if(link1) formData.append("link1", link1);
            if(link2) formData.append("link2", link2);
            if(file) formData.append("file", file);

            await C.postCalendar(formData);
            alert("일정 업로드 완료!");
            window.location.reload();
        } catch(error) {

        }
    };

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

    return (
        <>
            <S.Wrapper>
                <S.Content>
                    <S.HorizontalWrapper $justify={"space-between"}>
                        <S.TooltipWrapper>
                            <S.Icon src={help} $width={"15px"} $height={"15px"}></S.Icon>
                            <S.TooltipText>
                                <p style={{fontSize: "16px", fontWeight:"700", marginBottom: "5px"}}>캘린더 업로드 가이드</p>
                                <p style={{fontSize:"14px"}}>1. 일정 이름은 최대한 간단하게 나타내면 좋아요.</p>
                                <p style={{fontSize:"14px"}}>2. 일정 설명은 자세한 시각, 장소 등을 전부 알려주세요.</p>
                                <p style={{fontSize:"14px"}}>3. 일정 타입은 꼭 일정의 성격에 맞게 분류해주세요.</p>
                            </S.TooltipText>
                        </S.TooltipWrapper>
                        <S.Icon src={upload} $width={"25px"} $height={"25px"}></S.Icon>
                        <S.Icon src={cancel} onClick={onClose}></S.Icon>
                    </S.HorizontalWrapper>
                    <S.InputArea>
                        <S.HorizontalWrapper>
                            <S.Text $size={"16px"} $weight={"700"}>일정 이름</S.Text>
                        </S.HorizontalWrapper>
                        <S.InputTitle value={title} onChange={(e) => setTitle(e.target.value)}></S.InputTitle>
                    </S.InputArea>
                    <S.InputArea>
                        <S.HorizontalWrapper>
                            <S.Text $size={"16px"} $weight={"700"}>일정 설명</S.Text>
                        </S.HorizontalWrapper>
                        <S.InputDesc value={description} onChange={(e) => setDescription(e.target.value)}></S.InputDesc>
                    </S.InputArea>
                    <S.InputArea>
                        <S.HorizontalWrapper>
                            <S.Text $size={"16px"} $weight={"700"}>참고 이미지</S.Text>
                        </S.HorizontalWrapper>
                        <S.FileArea>
                            <S.FileUploadButton $imageUrl={uploadFile} onClick={handleClickFileUpload}></S.FileUploadButton>
                            {imagePreview && (<S.FileItem
                                    src={imagePreview}
                                    alt="preview"
                                    onClick={handleRemoveImage}
                                />
                            )}
                        </S.FileArea>
                        <S.FileInput type="file" accept="image/png, image/jpg, image/jpeg" multiple ref={fileInputRef} onChange={handleImageChange}/>
                    </S.InputArea>
                    <S.InputArea>
                        <S.HorizontalWrapper>
                            <S.Text $size={"16px"} $weight={"700"}>관련 링크 1</S.Text>
                        </S.HorizontalWrapper>
                        <S.InputLink value={link1} onChange={(e) => setLink1(e.target.value)}></S.InputLink>
                    </S.InputArea>
                    <S.InputArea>
                        <S.HorizontalWrapper>
                            <S.Text $size={"16px"} $weight={"700"}>관련 링크 2</S.Text>
                        </S.HorizontalWrapper>
                        <S.InputLink value={link2} onChange={(e) => setLink2(e.target.value)}></S.InputLink>
                    </S.InputArea>
                    <S.InputArea>
                        <S.HorizontalWrapper>
                            <S.Text $size={"16px"} $weight={"700"}>일정 날짜</S.Text>
                        </S.HorizontalWrapper>
                        <S.InputDate value={date} onChange={(e) => setDate(e.target.value)}></S.InputDate>
                    </S.InputArea>
                    <S.InputArea>
                        <S.HorizontalWrapper>
                            <S.Text $size={"16px"} $weight={"700"}>일정 타입</S.Text>
                        </S.HorizontalWrapper>
                        <S.InputType size={1} value={type} onChange={(e) => setType(e.target.value)}>
                            <S.Option value="BROADCAST">방송</S.Option>
                            <S.Option value="RADIO">라디오</S.Option>
                            <S.Option value="CONCERT">콘서트</S.Option>
                            <S.Option value="UNIV">대학 행사</S.Option>
                            <S.Option value="FESTIVAL">페스티벌</S.Option>
                            <S.Option value="ANNIERSARY">기념일</S.Option>
                            <S.Option value="BIRTHDAY">생일</S.Option>
                            <S.Option value="RELEASE">앨범 발매</S.Option>
                            <S.Option value="SALE">판매</S.Option>
                            <S.Option value="ETC">기타</S.Option>
                        </S.InputType>
                    </S.InputArea>
                    <S.SubmitButton disabled={title.length < 5 ||
                        title.length > 25 ||
                        description.length < 5 ||
                        date.length === 0 ||
                        type.length === 0}
                        onClick={requestCalenarUpload}
                    >일정 업로드</S.SubmitButton>
                </S.Content>
            </S.Wrapper>
        </>
    );
}

export default CalendarUpload;