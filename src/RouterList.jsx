// src/RouterList.js
import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import SignupLayout from "@/components/layout/SignupLayout";
import EmailSignupVerify from "@/pages/auth/EmailSignupVerify";
import LoginLayout from "@/components/layout/LoginLayout";
import Login from "@/pages/auth/Login";
import EmailLogin from "@/pages/auth/EmailLogin";
import ResetPassword from "@/pages/auth/ResetPassword";
import WrongPage from "@/pages/wrong/WrongPage";
import SignupForm from "./pages/auth/SignupForm";
import BackGround from "./pages/BackGround/BackGround";

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
                path: "/signup",
                element: <SignupLayout />,
                children: [
                    {
                        path: "email/verify",
                        element: <EmailSignupVerify />
                    },
                    {
                        path: "form",
                        element: <SignupForm />
                    }
                ]
            },
            {
                path: "/login",
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