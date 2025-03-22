// src/RouterList.js
import { createBrowserRouter } from "react-router-dom";
import LoginBackGround from "@/pages/BackGround/LoginBackGround";
import DefaultBackGround from "@/pages/BackGround/DefaultBackGround";
import Home from "@/pages/home";
import SignupLayout from "@/components/layout/SignupLayout";
import EmailVerify from "@/pages/auth/emailVerify";
import SignupForm from "@/pages/auth/signupForm";
import LoginLayout from "@/components/layout/LoginLayout";
import Login from "@/pages/auth/login";
import EmailLogin from "@/pages/auth/emailLogin";
import WrongPage from "@/pages/wrong/WrongPage";
import ResetPassword from "@/pages/auth/resetPassword";
import HomeLayout from "@/components/layout/HomeLayout";

export const RouterList = () => [
    {
        path: "/auth",
        element: <LoginBackGround />,
        children: [
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
    },
    {
        path: "/",
        element: <DefaultBackGround />,
        children: [
            {
                path: "",
                element: <HomeLayout />,
                children: [
                    {
                        path: "",
                        element: <Home />
                    }
                ]
            },
        ]
    }
];

export const RouterObject = createBrowserRouter(RouterList());