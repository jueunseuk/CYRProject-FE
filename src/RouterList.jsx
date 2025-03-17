// src/RouterList.js
import { createBrowserRouter } from "react-router-dom";
import BackGround from "@/pages/BackGround/BackGround";
import Home from "@/pages/Home";
import SignupLayout from "@/components/layout/SignupLayout";
import EmailVerify from "@/pages/auth/emailVerify";
import SignupForm from "@/pages/auth/signupForm";
import LoginLayout from "@/components/layout/LoginLayout";
import Login from "@/pages/auth/login";
import EmailLogin from "@/pages/auth/emailLogin";
import WrongPage from "@/pages/wrong/WrongPage";
import ResetPassword from "@/pages/auth/resetPassword";
 

export const RouterList = () => [
    {
        path: "/",
        element: <BackGround />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "signup",
                element: <SignupLayout />,
                children: [
                    {
                        path: "email/verify",
                        element: <EmailVerify />
                    },
                    {
                        path: "form",
                        element: <SignupForm />
                    }
                ]
            },
            {
                path: "login",
                element: <LoginLayout />,
                children: [
                    {
                        path: "",
                        element: <Login />
                    },
                    {
                        path: "email", 
                        element: <EmailLogin />
                    },
                    {
                        path: "reset-password",
                        element: <ResetPassword />
                    }
                ]
            },
            {
                path: "*",
                element: <WrongPage />
            },
        ]
    }
];

export const RouterObject = createBrowserRouter(RouterList());