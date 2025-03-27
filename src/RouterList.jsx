// src/RouterList.js
import { createBrowserRouter } from "react-router-dom";
import LoginBackGround from "@/pages/BackGround/LoginBackGround";
import DefaultBackGround from "@/pages/BackGround/DefaultBackGround";
import Home from "@/pages/home";
import SignupLayout from "@/components/layout/SignupLayout";
import EmailVerify from "@/pages/auth/emailVerify";
import EmailVerifyPassword from "@/pages/auth/emailVerifyPassword";
import SignupForm from "@/pages/auth/signupForm";
import LoginLayout from "@/components/layout/LoginLayout";
import Login from "@/pages/auth/login";
import EmailLogin from "@/pages/auth/emailLogin";
import WrongPage from "@/pages/wrong/WrongPage";
import ResetPassword from "@/pages/auth/resetPassword";
import HomeLayout from "@/components/layout/HomeLayout";
import NaverCallback from "@/pages/callback/naverCallback";
import PostList from "@/pages/postList";

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
                        path: "email/verify",
                        element: <EmailVerifyPassword />
                    },
                    {
                        path: "reset-password",
                        element: <ResetPassword />
                    }
                ]
            },
            {
                path: "callback-naver",
                element: <NaverCallback />
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
                    },
                    {
                        path: "board/:subPath",
                        element: <PostList />
                    },
                    {
                        path: "post/:postId",
                        element: <Home />
                    },
                    {
                        path: "post/write",
                        element: <Home />
                    },
                ]
            },
        ]
    },
    {
        path: "*",
        element: <WrongPage />
    }
];

export const RouterObject = createBrowserRouter(RouterList());