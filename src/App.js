import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";
import ProtectedRoute from "./routes/ProtectedRoute"; 

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route 
                    path="/users" 
                    element={
                        <ProtectedRoute>
                            <UsersPage />
                        </ProtectedRoute>
                    } 
                />
            </Routes>
        </div>
    );
}

export default App;
