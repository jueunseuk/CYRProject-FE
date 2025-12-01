import * as BC from "@/common/basic/BasicComponent";
import default_profile from "@/assets/image/default_profile.jpg";
import { useNavigate } from "react-router-dom";

export const UserProfileImage2 = ({ userId, profileUrl, width, height, radius }) => {
    const navigate = useNavigate();

    return (
        <BC.Image src={profileUrl ? profileUrl : default_profile} $w={width} $h={height} $fit={"cover"}
            style={{borderRadius: radius ? radius : "50%", cursor: "pointer"}}
            title="유저페이지로 이동"
            onClick={() => navigate(`/users/${userId}`)}
        />
    );
};