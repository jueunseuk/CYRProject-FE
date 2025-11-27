import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getExposedPosts = async (form) => {
    try {
        const response = await instance.get(`/post/exposed`);
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("게시글 목록을 불러오는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
}
