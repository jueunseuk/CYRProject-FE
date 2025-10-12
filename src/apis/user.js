import instance from "./instance";

export const getUserSidebar = async () => {
    try {
        const response = await instance.get(`/user/sidebar`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            console.log("사용자를 찾을 수 없습니다.");
        }

        throw error;
    }
};

export const getUserProfileData = async () => {
    try {
        const response = await instance.get(`/user/me`);
        return response;
    } catch(error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            console.log("사용자를 찾을 수 없습니다.");
        }

        throw error;
    }
};

export const getOtherProfileData = async (otherId) => {
    try {
        const response = await instance.get(`/user/${otherId}`);
        return response;
    } catch(error) {
        throw error;
    }
};

export const patchUserInformation = async (userData) => {
    try {
        const response = await instance.patch(`/user/profile/info`, userData);
        return response;
    } catch(error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            console.log("사용자를 찾을 수 없습니다.");
        }

        throw error;
    }
};

export const patchUserProfile = async (formData) => {
    try {
        const response = await instance.patch(`/user/profile/image`, formData);
        return response;
    } catch(error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            console.log("사용자를 찾을 수 없습니다.");
        }

        throw error;
    }
};

export const getUserActivityData = async (userId) => {
    try {
        const response = await instance.get(`/user/${userId}/activity`);
        return response;
    } catch(error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            console.log("사용자를 찾을 수 없습니다.");
        }

        throw error;
    }
};

export const patchUserActivityCntWithSync = async () => {
    try {
        const response = await instance.patch(`/user/profile/refresh`);
        return response;
    } catch(error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert("해당 사용자를 찾을 수 없습니다.");
        }

        throw error;
    }
};

export const getUserPosts = async (searchId, form) => {
    try {
        const response = await instance.get(`/user/${searchId}/posts`, 
            {params: form, headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert("해당 사용자를 찾을 수 없습니다.");
        }

        throw error;
    }
};

export const getUserEmpathyPosts = async (searchId, form) => {
    try {
        const response = await instance.get(`/user/${searchId}/empathized-post`, 
            {params: form, headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert("해당 사용자를 찾을 수 없습니다.");
        }

        throw error;
    }
};

export const getUserComments = async (searchId, form) => {
    try {
        const response = await instance.get(`/user/${searchId}/comments`, 
            {params: form, headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert("해당 사용자를 찾을 수 없습니다.");
        }

        throw error;
    }
};

export const getUserImages = async (searchId, form) => {
    try {
        const response = await instance.get(`/user/${searchId}/images`, 
            {params: form, headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert("해당 사용자를 찾을 수 없습니다.");
        }

        throw error;
    }
};