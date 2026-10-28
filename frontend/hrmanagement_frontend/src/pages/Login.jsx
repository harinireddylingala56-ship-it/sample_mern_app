
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let navigate = useNavigate();

    let handleLogin = async (event) => {
        event.preventDefault();

        // Admin login
        if (email === "admin@gmail.com" && password === "12345") {

            // Navigate to admin home
            navigate("/adminhome");

        } else {

            // Check employee credentials from database
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

            let data = await req.text();

            console.log(data);
            if (data.user.role == "HR") {
                navigate("/hrhome")

            } else {
                navigate("/emphome")

            }
        }
    };

    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter EmailID"
                />

                <br />

                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter Password"
                />

                <br />

                <button type="submit">Login</button>

            </form>
        </div>
    );
}

export default Login;
