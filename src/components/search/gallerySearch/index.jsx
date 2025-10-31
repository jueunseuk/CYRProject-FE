import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import { formatDate } from "@/util/dateFormatter";
import { useNavigate } from "react-router-dom";

const GallerySearch = ({data, pagination}) => {
    const navigate = useNavigate();

    const handleNavigateUserPage = (galleryId) => {
        navigate(`/gallery/${galleryId}`);
    };

    return (
        <BC.VerticalWrapper $ai={"flex-start"} $jc={"flex-start"} $gap={"10px"}>
            <BC.Text $size={"13px"}>총 <BC.Text $size={"13px"} $weight={"600"} style={{display: "inline"}}>{pagination.totalElements}</BC.Text>건의 검색 결과</BC.Text>
            {data.map((gallery, idx) => (
                <S.GalleryItem key={gallery.galleryId} onClick={() => handleNavigateUserPage(gallery.galleryId)}>
                    <BC.VerticalWrapper $jc={"flex-start"} $ai={"flex-start"} $gap={"5px"} style={{width: "600px", height: "100%"}}>
                        <BC.HorizontalWrapper $gap={"3px"}>
                            <BC.Text $size={"15px"} $weight={"600"} dangerouslySetInnerHTML={{ __html: gallery.title }}/>
                            <BC.Text>+{gallery.imageCnt}</BC.Text>
                            <BC.Text $size={"13px"} $color={"#878787"} style={{marginLeft: "5px"}}>{formatDate(gallery.createdAt, 1)}</BC.Text>
                        </BC.HorizontalWrapper>
                        <BC.Text $color={"#878787"} $size={"13px"}>{gallery.content}</BC.Text>
                        <BC.Text $color={"#878787"} $size={"13px"}>촬영 : {formatDate(gallery.picturedAt, 1)}</BC.Text>
                    </BC.VerticalWrapper>
                    <S.Image src={gallery.thumbnailUrl} />
                </S.GalleryItem>
            ))}
        </BC.VerticalWrapper>
    );
};

export default GallerySearch;