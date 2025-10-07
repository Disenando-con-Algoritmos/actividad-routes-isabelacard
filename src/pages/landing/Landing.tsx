import { Link } from "react-router";

import Button from "../../components/Button";

export default function Landing() {
    return (
        <div id="landing-page" className="flex flex-col items-center min-h-screen bg-pink-200 font-bold">
            <h1 className="text-5xl text-pink-600 mb-5 mt-40">Welcome to TechStore :3</h1>
            <p className="text-black text-[15px] mb-30">A shopping web dedicated to tech lovers</p>
            <Link to="/register">
                <Button texto="Register" />
            </Link>
            <Link to="/login">
                <Button texto="Log in" />
            </Link>
        </div>
    );
}
