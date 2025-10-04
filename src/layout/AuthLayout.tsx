import { Outlet } from "react-router";

export default function AuthLayout() {
    return (
        <div id="Layout-page" className="flex flex-col items-center justify-center min-h-screen bg-pink-200 text-pink-600 font-bold">
            <h1 className="text-4xl">Layout page</h1>
            <Outlet />
        </div>
    );
}
