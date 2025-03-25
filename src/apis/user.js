import instance from "./instance";

export const requestUserExperience = () => {
    return instance.get("/user/exp");
}
