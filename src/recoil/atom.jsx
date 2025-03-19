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
        method: "",
        email: "",
        name: "",
        nickname: ""
    },
});