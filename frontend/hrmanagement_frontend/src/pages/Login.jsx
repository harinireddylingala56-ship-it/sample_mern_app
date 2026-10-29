import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let navigate = useNavigate();

    let handleLogin = async (event) => {
        event.preventDefault();

        try {
            // Admin login
            if (email === "admin@gmail.com" && password === "admin") {
                localStorage.setItem(
                    "currentuser",
                    JSON.stringify({
                        name: "admin",
                        role: "admin"
                    })
                );

                navigate("/adminhome");
                return;
            }

            // HR / Employee login
            let req = await fetch(
                "http://localhost:3000/api/emp/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            let data = await req.json();

            console.log("Login response:", data);

            if (!req.ok || !data.user || !data.user.role) {
                console.error("Login failed:", data);
                return;
            }

            // Store user details
            localStorage.setItem(
                "currentuser",
                JSON.stringify(data.user)
            );

            // Navigate directly without popup
            if (data.user.role.toUpperCase() === "HR") {
                navigate("/hrhome");
            } else {
                navigate("/emphome");
            }

        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter EmailID"
                    required
                />

                <br />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    required
                />

                <br />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;