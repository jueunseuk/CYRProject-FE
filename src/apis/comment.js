import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const postComment = async (param) => {
    try {
        const response = await instance.post(`${backendUrl}/comment`, param, {headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            const errorCode = error.response.code;
            if(errorCode === "COM_001") {
                alert("댓글 내용이 너무 짧아 처리하지 못했습니다.");
            }
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
}

export const getUserCommentList = async () => {
    try {

    } catch(error) {
        
    }
};

export const getPostCommentList = async (postId) => {
    try {
        const response = await instance.get(`${backendUrl}/comment/${postId}`, { headers: { Accept: "application/json" } });
        return response.data;
    } catch(error) {
        if(error.response && error.response.data) {
            const errorCode = error.response.code;
            if(errorCode === "POST_001") {
                alert("작성자가 삭제했거나 차단된 게시글입니다.");
            }
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
};
