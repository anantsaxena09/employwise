import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserList from "../components/UserList";

function UsersPage() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=1")
            .then(res => res.json())
            .then(data => setUsers(data.data));
    }, []);

    function handleLogout() {
        sessionStorage.removeItem("token");
        navigate("/");
      }

    return (
        <div className="p-6">
            <div className="flex justify-end mb-4">
                <button 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

            <UserList users={users} />
        </div>
    );
}

export default UsersPage;
