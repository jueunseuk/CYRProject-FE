// src/RouterList.js
import { createBrowserRouter } from "react-router-dom";
import LoginBackGround from "@/pages/BackGround/LoginBackGround";
import DefaultBackGround from "@/pages/BackGround/DefaultBackGround";
import BoardBackGround from "@/pages/BackGround/BoardBackGround";
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
import PostList from "@/pages/posts";
import Post from "@/pages/post";
import FooterPage from "@/pages/footerPage";
import Editor from "@/pages/editor";
import UpdateEditor from "./pages/updateEditor";

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
                        path: ":subPath",
                        element: <BoardBackGround />,
                        children: [
                            {
                                path: "",
                                element: <PostList />
                            },
                            {
                                path: ":postId",
                                element: <Post />
                            },
                        ]

                    },
                    {
                        path: "write/:type",
                        element: <Editor />
                    },
                    {
                        path: "edit/:type/:postId",
                        element: <UpdateEditor />
                    },

                    // footer
                    {
                        path: "terms",
                        element: <FooterPage />
                    },
                    {
                        path: "guide",
                        element: <FooterPage />
                    },
                    {
                        path: "policy",
                        element: <FooterPage />
                    },
                    {
                        path: "about",
                        element: <FooterPage />
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