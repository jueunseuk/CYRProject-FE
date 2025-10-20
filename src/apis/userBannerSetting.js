import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getUserBannerList = async (form) => {
    try {
        const response = await instance.get(`/user/setting/banner`, {params: form, headers: {Accept: "application/json"}});
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(error && error.response) {

        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

export const updateBannerSequence = async (banners) => {
    try {
        const response = await instance.patch(`/user/setting/banner`, banners);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        console.log(error)
        
        if(error && error.response) {

        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

