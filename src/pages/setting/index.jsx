import useUserInfo from "@/hooks/localStorage";
import UserSetting from "@/components/setting";

const Setting = () => {
    const user = useUserInfo();

    return (
        <>
            <UserSetting user={user} />
        </>
    )
};

export default Setting;