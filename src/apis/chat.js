import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getChatRoomList = async () => {
    try {
        const response = await instance.get(`/chat/room/all`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const getOtherChatRoomList = async () => {
    try {
        const response = await instance.get(`/chat/room/search`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const getChatMessageList = async (chatRoomId, form) => {
    try {
        const response = await instance.get(`/chat/message/${chatRoomId}`, {params: form});
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const createChatRoom = async (form) => {
    try {
        const response = await instance.post(`/chat/room`, form);
        return response;
    } catch (error) {
        const errorCode = error.response.data.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.data.message);
        }

        throw error;
    }
};

export const joinChatRoom = async (chatRoomId) => {
    try {
        const response = await instance.post(`/chat/room/user/${chatRoomId}`);
        return response;
    } catch(error) {
        const errorCode = error.response.data.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        } else if(errorCode === "CUR_002") {
            alert(error.response.data.message)
        } else if(errorCode === "CUR_003") {
            alert(error.response.data.message)
        }

        throw error;
    }
};

export const exitChatRoom = async (chatRoomId) => {
    try {
        const response = await instance.delete(`/chat/room/user/${chatRoomId}`);
        return response;
    } catch(error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};