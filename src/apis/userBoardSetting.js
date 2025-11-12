import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getUserBoardList = async () => {
    try {
        const response = await instance.get(`/user/setting/board`);
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

export const postUserBookmark = async (boardId) => {
    try {
        const response = await instance.post(`/user/setting/board/${boardId}`);
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

export const deleteUserBookmark = async (boardId) => {
    try {
        const response = await instance.delete(`/user/setting/board/${boardId}`);
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

