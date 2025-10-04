import { Link } from "react-router";

import Button from "../../components/Button";

export default function Register() {
    return (
        <div id="register-page" className="flex flex-col items-center justify-center min-h-screen bg-pink-200 font-bold">
            <h1 className="text-4xl text-pink-600 mb-5">TechStore :3</h1>
            <h2 className="text-black">Register</h2>
            <div id="input" className="flex flex-col items-center justify-center text-pink-600 font-bold">
                <input type="text" placeholder="Username" className="input input-secondary bg-white m-2" />
                <input type="text" placeholder="Full name" className="input input-secondary bg-white m-2" />
                <input type="text" placeholder="Password" className="input input-secondary bg-white m-2" />
            </div>
            <Button texto="Register" />
            <p className="text-pink-400 pt-2 text-[15px]">
                Already have an account?{" "}
                <Link to="/login" className="pt-2 text-pink-500 underline">
                    Log in
                </Link>
            </p>
        </div>
    );
}
