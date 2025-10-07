import React, { useRef } from "react";
import { Link, useNavigate } from "react-router";

import Button from "../../components/Button";

export default function Register() {
    const formRef = useRef(null);
    const nav = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const form = formRef.current;
        if (form) {
            const formData = new FormData(form);
            localStorage.setItem("user", formData.get("username") as string);
            nav("/login");
        }
    };

    return (
        <div id="register-page" className="flex flex-col items-center justify-center min-h-screen bg-pink-200 font-bold">
            <h1 className="text-4xl text-pink-600 mb-5">TechStore :3</h1>
            <h2 className="text-black">Register</h2>
            <div id="input" className="flex flex-col items-center justify-center text-pink-600 font-bold">
                <form ref={formRef} action="" onSubmit={handleSubmit} className="flex flex-col justify-center">
                    <input type="text" name="username" placeholder="Username" className="input input-secondary bg-white m-2" />
                    <input type="text" name="fullname" placeholder="Full name" className="input input-secondary bg-white m-2" />
                    <input type="password" name="password" placeholder="Password" className="input input-secondary bg-white m-2" />
                    <Button texto="Register" />
                </form>
            </div>
            <p className="text-pink-400 pt-2 text-[15px]">
                Already have an account?{" "}
                <Link to="/login" className="pt-2 text-pink-500 underline">
                    Log in
                </Link>
            </p>
        </div>
    );
}
