import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [navigate, setNavigate] = useState("");

    const handleLogin = () => {
        if (username.trim() === "" || password.trim() === "") {
            setErrorMessage("Please fill out all fields.");
        } else if (username === "admin" && password === "admin") {
            setNavigate('/'); // Redirect to the main page
        } else {
            setErrorMessage("Incorrect username or password.");
        }
    };

    return (
        <div className="container mx-auto h-screen px-8 py-2 flex items-center justify-center">
            <div className="bg-sky-600 p-8 rounded-lg shadow-lg shadow-indigo-500/50 w-96">
                <div className="flex items-center justify-center mb-6 border-b-4 border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block w-8 h-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <h1 className="text-2xl font-bold text-white">Solo Leveling</h1>
                </div>
                <h2 className="text-xl font-bold text-white text-center mb-4">Login</h2>
                {errorMessage && (
                    <div className="mb-4">
                        <p className="text-sm text-red-600">{errorMessage}</p>
                    </div>
                )}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-white font-bold">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-sky-800"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-white font-bold">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-sky-800"
                    />
                </div>
                <button
                    className="w-full mb-5 py-2 bg-sky-500 text-white rounded-md hover:bg-gray-700"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <hr />
                <Link to="/register">
                    <h3 className="text-sm text-center font-light mt-5 hover:underline hover:text-md text-white">
                        Don't have an account? Register
                    </h3>
                </Link>
            </div>
        </div>
    );
};
