import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as N from "@/apis/notification";
import cancel from "@/assets/icon/etc/cancel.svg";
import { useEffect, useState } from "react";
import { formatDate } from "@/util/dateFormatter";
import { useNavigate } from "react-router-dom";

const NotificationList = ({onClose}) => {
    const navigate = useNavigate();
    const [notificationData, setNotificationData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchNotificationList = async () => {
        try {
            const response = await N.getAllNotificationList();
            setNotificationData(response.data);
        } catch(error) {

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotificationList();
    }, []);

    const handleNavigate = (type, targetId) => {
        switch(type) {
            case "SYSTEM" : navigate(`/users/${targetId}`); break;
            case "USER" : navigate(`/users/${targetId}`); break;
            case "RANKING" : navigate("/ranking"); break;
            case "POLL" : navigate("/poll"); break;
            case "ANNOUNCEMENT" : navigate(`/announcement/${targetId}`); break;
            case "EVENT" : navigate("/event"); break;
            case "ACHIEVEMENT" : navigate("/user/achievement"); break;
        }
    };

    return (
        <S.Wrapper>
            <BC.HorizontalWrapper $jc={"space-between"} style={{width: "100%", borderBottom: "1px solid #eee", paddingBottom: "5px", marginBottom: "5px"}}>
                <BC.Icon src={cancel} style={{visibility: "hidden"}} />
                <BC.Text $size={"15px"} $weight={"600"} style={{alignSelf: "center"}}>알림</BC.Text>
                <BC.Icon src={cancel} style={{cursor: "pointer", borderRadius: "5px"}}
                    onClick={onClose}
                />
            </BC.HorizontalWrapper>
            <BC.VerticalWrapper $ai={"flex-start"} $jc={"flex-start"} $gap={"6px"}>
                {(loading || notificationData.length === 0) ?
                <BC.EmptyBox $w={"100%"} $h={"100px"} $size={"13px"}>현재 알림이 없어요..</BC.EmptyBox>
                :
                notificationData.map((notification) => (
                    <S.NotificationItem key={notification.notificationId} style={{cursor: notification.targetId === null ? "default" : "pointer"}}
                        onClick={() => handleNavigate(notification.type, notification.targetId)}
                    >
                        <BC.Text $size={"11px"} $weight={"600"}>{formatDate(notification.createdAt, 7)}</BC.Text>
                        <BC.Text><BC.Text $size={"11px"} $weight={"600"} style={{backgroundColor: "#ddd", padding: "1px 3px", borderRadius: "3px", display: "inline", marginRight: "5px"}}>{notification.type}</BC.Text>{notification.message}</BC.Text>
                    </S.NotificationItem>
                ))}
            </BC.VerticalWrapper>
        </S.Wrapper>
    )
};

export default NotificationList;