import instance from "./instance";

export const getAllAlbums = async () => {
    try {
        const response = await instance.get(`/albums/all`, {headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            alert(error.response.data.message);
        } else {
        }

        throw error;
    }
};

export const getAlbum = async (albumId) => {
    try {
        const response = await instance.get(`/albums/${albumId}`, {headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            alert(error.response.data.message);
        } else {
        }

        throw error;
    }
};
