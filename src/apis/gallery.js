import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getGalleryUpload = async (formData) => {
    try {
        const response = await instance.post("/gallery/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("업로드 성공!");
        return response;
    } catch (error) {
        alert("업로드 실패!");
        throw error;
    }
};

export const getAllGalleryImages = async (form) => {
    try {
        const response = axios.get(`${backendUrl}/gallery`, {params: form, headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("갤러리를 불러오는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
};