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

export const patchComment = async (form, commentId) => {
    try {
        console.log(form)
        const response = await instance.patch(`/comment/${commentId}`, form, {headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            const errorCode = error.response.data.code;

            if(errorCode === "POST_001") {
                alert("작성자가 삭제했거나 차단된 게시글입니다.");
            }

            throw error;
        } else {
            alert("서버가 원활하지 않습니다.\n 다시 시도해주세요.");
        }
    }
}

export const deleteComment = async (commentId) => {
    try {
        const response = await instance.delete(`/comment/${commentId}`);
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
}