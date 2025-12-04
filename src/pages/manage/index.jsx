import useUserInfo from "@/hooks/localStorage";
import Management from "@/components/manage";

const Manage = () => {
    const user = useUserInfo();

    return (
        <>
            <Management user={user} />
        </>
    )
};

export default Manage;