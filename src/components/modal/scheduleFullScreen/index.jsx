import * as S from "./styles";

const ScheduleFullScreen = ({onClose, selectedSchedule}) => {
    const getScheduleColor = (type) => {
        switch(type) {
            case "BROADCAST" : return {"color": "#F44336", "name": "방송"}; // red
            case "RADIO" : return {"color": "#FF9800", "name": "라디오"}; // orange
            case "CONCERT" : return {"color": "#9C27B0", "name": "콘서트"}; // purple
            case "UNIV" : return {"color": "#3F51B5", "name": "대학 행사"}; // indigo
            case "FESTIVAL" : return {"color": "#2196F3", "name": "페스티벌"}; // blue
            case "ANNIVERSARY" : return {"color": "#4CAF50", "name": "기념일"}; // green
            case "BIRTHDAY" : return {"color": "#C6BC73", "name": "생일"}; // signiture
            case "RELEASE" : return {"color": "#FF3399", "name": "앨범 발매"}; // pink
            case "SALE" : return {"color": "#795548", "name": "판매"}; // brown
            case "ETC" : return {"color": "#878787", "name": "기타"}; // gray
        };
    };

    return (
        <S.Wrapper onClick={onClose} >
            <S.Content>
                {selectedSchedule.imageUrl ? <S.Image src={selectedSchedule.imageUrl}/> : <S.NoImage>No image</S.NoImage>}
                <S.VerticalWrapper>
                    <S.HorizontalWrapper $gap={"5px"} $jc>
                        <S.Text>제목</S.Text>
                        <S.Text>:</S.Text>
                        <S.Text style={{fontWeight: "300"}}>{selectedSchedule.title}</S.Text>
                    </S.HorizontalWrapper>
                    <S.HorizontalWrapper $gap={"5px"} $jc>
                        <S.Text>일시</S.Text>
                        <S.Text>:</S.Text>
                        <S.Text style={{fontWeight: "300"}}>{selectedSchedule.date}</S.Text>
                    </S.HorizontalWrapper>
                    <S.HorizontalWrapper $gap={"5px"} $jc>
                        <S.Text>장소</S.Text>
                        <S.Text>:</S.Text>
                        <S.Text style={{fontWeight: "300"}}>{selectedSchedule.date}</S.Text>
                    </S.HorizontalWrapper>
                    <S.HorizontalWrapper $gap={"5px"} $jc>
                        <S.Text>분류</S.Text>
                        <S.Text>:</S.Text>
                        <S.Text style={{fontWeight: "300", color: getScheduleColor(selectedSchedule.type).color, fontWeight: "800"}}>{getScheduleColor(selectedSchedule.type).name}</S.Text>
                    </S.HorizontalWrapper>
                    {selectedSchedule.link1 && (
                        <S.HorizontalWrapper $gap={"5px"} $jc>
                            <S.Text>링크 1</S.Text>
                            <S.Text>:</S.Text>
                            <S.Link href={selectedSchedule.link1} target="_blank">{selectedSchedule.link1}</S.Link>
                        </S.HorizontalWrapper>
                    )}
                    {selectedSchedule.link2 && (
                        <S.HorizontalWrapper $gap={"5px"} $jc>
                            <S.Text>링크 2</S.Text>
                            <S.Text>:</S.Text>
                            <S.Link href={selectedSchedule.link2} target="_blank">{selectedSchedule.link2}</S.Link>
                        </S.HorizontalWrapper>
                    )}
                    <S.VerticalWrapper style={{gap: "5px"}} >
                        <S.Text>설명</S.Text>
                        <S.Text style={{fontWeight: "300", whiteSpace: "pre-line"}}>{selectedSchedule.description}</S.Text>
                    </S.VerticalWrapper>
                </S.VerticalWrapper>
            </S.Content>
        </S.Wrapper>
    );
};

export default ScheduleFullScreen;