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
const ListingManagement = lazy(() => import("@/app/management/listings/Listings"));
const ReportManagement = lazy(() => import("@/app/management/moderation/ReportManagement"));
const TransactionReports = lazy(() => import("@/app/management/reports/TransactionReports"));
const Transactions = lazy(() => import("@/app/management/transactions/Transactions"));
const FinancialOrders = lazy(() => import("@/app/management/financial-orders/FinancialOrders"));
const CategoryManagement = lazy(() => import("@/app/management/categories/CategoryManagement"));
const InventoryImport = lazy(() => import("@/app/management/inventory-import/InventoryImport"));
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
            { path: "listing-management", element: <ListingManagement /> },
            { path: "report-management", element: <ReportManagement /> },
            { path: "user-management", element: <Users /> },
            { path: "transactions", element: <Transactions /> },
            { path: "transaction-reports", element: <TransactionReports /> },
            { path: "financial-orders", element: <FinancialOrders /> },
            { path: "category-management", element: <CategoryManagement /> },
            { path: "inventory-import", element: <InventoryImport /> },
            { path: "notifications", element: <Notifications /> },

            // Settings
            { path: "settings/profile", element: <Profile /> },
            { path: "settings/about", element: <About /> },
            { path: "settings/terms", element: <Terms /> },
            { path: "settings/privacy", element: <Privacy /> },
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