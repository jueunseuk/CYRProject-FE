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

export const getPost = async (form, config = {}) => {
    try {
        
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("게시글 목록을 불러오는 데 실패했습니다.");
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