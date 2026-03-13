import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import DashboardLayout from "../layout/DashboardLayout";


function LoginPage({ onLogin }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/dashboard");
        } catch (error) {
            alert("Invalid Credentials");
        }
    };

    return  <>
        <Nav/>
        <DashboardLayout />

        <div style={{
            // height: "90vh",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            background: "#f1f5f9",
            position:"absolute", top:"50%" , left:"50%", transform:"translate(-50%, -50%)"
        }}>
            <form onSubmit={handleLogin} style={{
                background: "#fff",
                padding: "40px",
                width: "300px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }}>
                <h2 style={{ marginBottom: "20px" }}>Admin Login</h2>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                />

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "8px",
                        background: "#1e293b",
                        color: "#fff",
                        border: "none"
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    </>
}

export default LoginPage;