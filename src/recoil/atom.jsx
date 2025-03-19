import { atom } from "recoil";

export const signupState = atom ({
    key : 'signupState',
    default: {
        method: '',
        email: ''
    },
});

export const userState = atom ({
    key : 'userState',
    default: {
        userId: "",
        name: "",
        nickname: "",
        accessToken: "",
        role: "",
    },
});