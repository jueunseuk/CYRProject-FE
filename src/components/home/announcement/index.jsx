import * as A from "@/apis/announcement";
import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatDate } from "@/util/dateFormatter";
import { SkeletonItem } from "@/common/skeleton/Skeleton";

const AnnouncementSummary = () => {
    const [announcementData, setAnnouncementData] = useState([]);
    const [recentData, setRecentData] = useState([]);
    const [skeleton, setSkeleton] = useState(true);
    const navigate = useNavigate();

    const handleNavigatePost = (id) => {
        navigate(`/announcement/${id}`);
    }

    const fetchPosts = async () => {
        try {
            setSkeleton(true);
            const response = await A.getFixedAnnouncementList();
            setAnnouncementData(response.data);
        } catch(error) {
            
        } finally {
            setSkeleton(false);
        }
    }

    const fetchRecentAnnouncement = async () => {
        try {
            const form = {
                "page": 0,
                "size": 5,
                "sort": "createdAt",
                "direction": "DESC"
            }
            const response = await A.getAnnouncementList(form);
            setRecentData(response.data.content);
        } catch(error) {
            
        }
    };
    
    useEffect(() => {
        fetchRecentAnnouncement();
        fetchPosts();
    }, []);

    return (
        <>
            <S.Wrapper>
                <S.TitleArea>
                    <S.Text $size={"16px"} $weight={"600"}>공지사항</S.Text>
                    <S.Text $size={"12px"} style={{cursor: "pointer"}} onClick={() => navigate("/announcement")}>더보기</S.Text>
                </S.TitleArea>
                <S.Table>
                    <colgroup>
                        <col style={{ width: "15%" }} />
                        <col style={{ width: "65%" }} />
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "10%" }} />
                    </colgroup>
                    <tbody>
                        {recentData.map((announcement) => (
                            <S.Row key={announcement.announcementId}>
                                    <S.FirstColumn><S.Text>[ {announcement.name} ]</S.Text></S.FirstColumn>
                                    <S.Column $align={"left"} onClick={() => handleNavigatePost(announcement.announcementId)}><S.Text style={{cursor: "pointer"}}>{announcement.title}</S.Text></S.Column>
                                    <S.Column $align={"left"}><S.Text onClick={() => navigate(`/users/${announcement.userId}`)} style={{cursor: "pointer"}}>{announcement.nickname}</S.Text></S.Column>
                                    <S.Column><S.Text $color={"#878787"}>{formatDate(announcement.createdAt, 3)}</S.Text></S.Column>
                                </S.Row>
                        ))}
                        {skeleton ? 
                            Array.from({ length: 5 }).map((_, index) => (
                                <S.Row key={index}>
                                    <S.FirstColumn><SkeletonItem $width="100%" $height="15px" $radius={"5px"} /></S.FirstColumn>
                                    <S.Column><SkeletonItem $width="100%" $height="15px" $radius={"5px"} /></S.Column>
                                    <S.Column><SkeletonItem $width="100%" $height="15px" $radius={"5px"} /></S.Column>
                                    <S.Column><SkeletonItem $width="100%" $height="15px" $radius={"5px"} /></S.Column>
                                </S.Row>
                            ))
                            : announcementData.map((announcement) => (
                                <S.Row key={announcement.announcementId}>
                                    <S.FirstColumn><S.Text>[ {announcement.name} ]</S.Text></S.FirstColumn>
                                    <S.Column $align={"left"} onClick={() => handleNavigatePost(announcement.announcementId)}><S.Text style={{cursor: "pointer"}}>{announcement.title}</S.Text></S.Column>
                                    <S.Column $align={"left"}><S.Text onClick={() => navigate(`/users/${announcement.userId}`)} style={{cursor: "pointer"}}>{announcement.nickname}</S.Text></S.Column>
                                    <S.Column><S.Text $color={"#878787"}>{formatDate(announcement.createdAt, 3)}</S.Text></S.Column>
                                </S.Row>
                        ))}
                    </tbody>
                </S.Table>
            </S.Wrapper>
        </>
    );
}

export default AnnouncementSummary;