import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getBuyList = async (categoryId, form) => {
    try {
        const response = await instance.get(`/user/inventory/${categoryId}`, {params: form, headers: {Accept: "application/json"}});
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

export const getAllBuyList = async (categoryId, form) => {
    try {
        const response = await instance.get(`/user/inventory/all`, {params: form, headers: {Accept: "application/json"}});
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

export const getUseList = async (form) => {
    try {
        const response = await instance.get(`/user/inventory/use`, {params: form, headers: {Accept: "application/json"}});
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

export const useInventoryItem = async (userInventoryId) => {
    try {
        const response = await instance.post(`/user/inventory/${userInventoryId}/use`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(error && error.response) {
            alert(error.response.message);
        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};