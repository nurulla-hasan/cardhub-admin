import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/main-layout";
import { lazy } from "react";
import AuthLayout from "@/layout/auth-layout";

//======================================================================================================================
// App pages (all under src/app)
const Dashboard = lazy(() => import("@/app/dashboard/Dashboard"));
const Profile = lazy(() => import("@/app/settings/profile/Profile"));
const Privacy = lazy(() => import("@/app/settings/privacy/Privacy"));
const Terms = lazy(() => import("@/app/settings/terms/Terms"));
const About = lazy(() => import("@/app/settings/about-us/About"));
const Users = lazy(() => import("@/app/management/users/Users"));
const AuctionManagement = lazy(() => import("@/app/management/auction/Auction"));
const OrderManagement = lazy(() => import("@/app/management/orders/Orders"));
const Transactions = lazy(() => import("@/app/management/transactions/Transactions"));
const CategoryBanner = lazy(() => import("@/app/management/category-banner/CategoryBanner"));
const FinancialOrders = lazy(() => import("@/app/management/financial-orders/FinancialOrders"));
const Tips = lazy(() => import("@/app/settings/tips/Tips"));
const Accessibility = lazy(() => import("@/app/settings/accessibility/Accessibility"));
const FAQs = lazy(() => import("@/app/settings/faqs/FAQs"));
const Notifications = lazy(() => import("@/app/notifications/Notifications"));
const Login = lazy(() => import("@/app/auth/Login"));
const ForgotPassword = lazy(() => import("@/app/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("@/app/auth/ResetPassword"));
const CodeVerification = lazy(() => import("@/app/auth/CodeVerification"));

//======================================================================================================================

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Dashboard /> },

            // Management
            { path: "auction-management", element: <AuctionManagement /> },
            { path: "order-management", element: <OrderManagement /> },
            { path: "user-management", element: <Users /> },
            { path: "transactions", element: <Transactions /> },
            { path: "category-banner", element: <CategoryBanner /> },
            { path: "financial-orders", element: <FinancialOrders /> },
            { path: "notifications", element: <Notifications /> },

            // Settings
            { path: "settings/profile", element: <Profile /> },
            { path: "settings/about", element: <About /> },
            { path: "settings/tips", element: <Tips /> },
            { path: "settings/accessibility", element: <Accessibility /> },
            { path: "settings/terms", element: <Terms /> },
            { path: "settings/privacy", element: <Privacy /> },
            { path: "settings/faqs", element: <FAQs /> },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { path: "login", element: <Login /> },
            { path: "forgot-password", element: <ForgotPassword /> },
            { path: "reset-password", element: <ResetPassword /> },
            { path: "verify", element: <CodeVerification /> },
        ]
    }
]);