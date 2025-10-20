import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getComplaint = async (complaintId) => {
    try {
        const response = await instance.get(`/complaint/${complaintId}`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(error && error.response) {
            if(errorCode === "COMP_001") {
                alert("해당 컴플레인을 찾지 못했습니다.");
            } else if(errorCode === "COMP_002"){
                alert("이미 처리된 컴플레인입니다.")
            } else if(errorCode === "COMP_003"){
                alert("메세지의 내용이 너무 짧습니다.")
            } else if(errorCode === "USER_004"){
                alert("적어도 매니저의 권한이 필요합니다.")
            }
        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

export const getComplaintList = async (form) => {
    try {
        const response = await instance.get(`/complaint/all`, {params: form, headers: {Accept: "application/json"}});
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

export const postComplaint = async (form) => {
    try {
        const response = await instance.post(`/complaint`, form);
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

export const acceptComplaint = async (complaintId, form) => {
    try {
        const response = await instance.patch(`/complaint/${complaintId}/accept`, form);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(error && error.response) {
            if(errorCode === "COMP_001") {
                alert("해당 컴플레인을 찾지 못했습니다.");
            } else if(errorCode === "COMP_002"){
                alert("이미 처리된 컴플레인입니다.")
            } else if(errorCode === "COMP_003"){
                alert("메세지의 내용이 너무 짧습니다.")
            } else if(errorCode === "USER_004"){
                alert("적어도 매니저의 권한이 필요합니다.")
            }
        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

export const rejectComplaint = async (complaintId, form) => {
    try {
        const response = await instance.patch(`/complaint/${complaintId}/reject`, form);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(error && error.response) {
            if(errorCode === "COMP_001") {
                alert("해당 컴플레인을 찾지 못했습니다.");
            } else if(errorCode === "COMP_002"){
                alert("이미 처리된 컴플레인입니다.")
            } else if(errorCode === "COMP_003"){
                alert("메세지의 내용이 너무 짧습니다.")
            } else if(errorCode === "USER_004"){
                alert("적어도 매니저의 권한이 필요합니다.")
            }
        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

