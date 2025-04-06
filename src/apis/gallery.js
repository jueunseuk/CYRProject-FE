import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const requestGalleryUpload = async (formData) => {
    try {
        const response = await instance.post("/gallery/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("업로드 성공");
        return response;
    } catch (error) {
        alert("업로드 실패!");
        throw error;
    }
};