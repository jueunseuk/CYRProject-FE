import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getAllPosts = async (form) => {
    try {
        const response = await axios.get(`${backendUrl}/posts/new`, {params: form, headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("게시글 목록을 불러오는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
}

export const getPopularPosts = async (form) => {
    try {
        const response = await axios.get(`${backendUrl}/posts/popular`, {params: form, headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("게시글 목록을 불러오는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
}

export const getBoardPosts = async (form) => {
    try {
        const response = await axios.get(`${backendUrl}/posts/list`, {params: form, headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("게시글 목록을 불러오는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
}

export const getPost = async (postId) => {
    try {
        const response = await instance.get(`/posts/${postId}`, {headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("게시글을 불러오는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
}

export const requestPost = async (form) => {
    try {
        const response = await instance.post("/posts", form, {headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            elert("게시글 등록에 실패했습니다.\n게시글 업로드 조건을 다시 확인해주세요.");
        } else {
            elert("서버가 응답하지 않습니다.");
        }
    }
}

export const deletePost = async (postId) => {
    try {
        const response = await instance.delete(`/posts/${postId}`);
    } catch(error) {
        if(error.response && error.response.data) {
            const errorCode = error.response.data.code;

            if(errorCode === 'POST_004') {
                alert("삭제할 권한이 부족합니다.");
            } else if(errorCode === "POST_001") {
                alert("삭제됐거나 존재하지 않는 게시글입니다.");
            }

            throw error;
        } else {
            alert("서버가 원활하지 않습니다.\n 다시 시도해주세요.");
        }
    }
}