import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const requestGalleryUpload = (formData) => {
    instance.post("/gallery/upload", formData, {headers: {"Content-Type": "multipart/form-data"}})
    .then((response) => {
        alert("업로드 성공");
    })
    .catch((error) => {
        alert("업로드 실패!");
    });
}