import instance from "./instance";

export const getUserSidebar = async () => {
    try {
        const response = await instance.get(`/user/sidebar`);
        return response;
    } catch (error) {
        console.log(error)
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            console.log("사용자를 찾을 수 없습니다.");
        }

        throw error;
    }
};