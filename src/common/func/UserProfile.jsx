import * as BC from "@/common/basic/BasicComponent";
import { useNavigate } from "react-router-dom";

export const UserProfileImage = ({ user, width, height, radius }) => {
    const navigate = useNavigate();

    return (
        <BC.Image src={user.profileUrl} $w={width} $h={height} $fit={"cover"}
            style={{borderRadius: radius ? radius : "50%", cursor: "pointer"}}
            title="유저페이지로 이동"
            onClick={() => navigate(`/users/${user.userId}`)}
        />
    );
};