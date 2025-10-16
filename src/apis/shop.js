import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getShopItemList = async (categoryId, form) => {
    try {
        const response = await instance.get(`/shop/item/${categoryId}`, {params: form, headers: {Accept: "application/json"}});
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

export const postPurchaseShopItem = async (itemId) => {
    try {
        const response = await instance.post(`/shop/item/${itemId}/buy`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(error && error.response) {
            if(errorCode === "USER_001") {
                alert("존재하지 않는 사용자입니다.");
            } else if(errorCode === "SHOPI_001") {
                alert("해당 상품이 존재하지 않습니다.");
            } else if(errorCode === "SHOPI_003") {
                alert(error.response.data.message);
            } else if(errorCode === "SHOPI_002") {
                alert(error.response.data.message);
            }
        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};