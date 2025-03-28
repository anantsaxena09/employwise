import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

function UserList({ users }) {
    const [userList, setUserList] = useState(users);

    useEffect(() => {
        setUserList(users);
    }, [users]);

    function handleUpdate(updatedUser) {
        setUserList(userList.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    }

    function handleDelete(userId) {
        setUserList(userList.filter(user => user.id !== userId));
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">User List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-6 md:px-12">
                {userList.map(user => (
                    <UserCard 
                        key={user.id} 
                        user={user} 
                        onUpdate={handleUpdate} 
                        onDelete={handleDelete} 
                    />
                ))}
            </div>
        </div>
    );
}

export default UserList;