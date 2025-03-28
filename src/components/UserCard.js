import React, { useState } from "react";
import EditUserForm from "./EditUserForm";

function UserCard({ user, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
        setIsEditing(true);
    }

    function handleSave(updatedUser) {
        onUpdate(updatedUser);
        setIsEditing(false);
    }

    function handleDelete() {
        onDelete(user.id);
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center">
            {isEditing ? (
                <EditUserForm user={user} onUpdate={handleSave} onCancel={() => setIsEditing(false)} />
            ) : (
                <>
                    {/* Avatar */}
                    <img 
                        src={user.avatar} 
                        alt={user.first_name} 
                        className="w-20 h-20 rounded-full shadow-md border-2 border-gray-200"
                    />

                    {/* Name & Email */}
                    <h2 className="text-xl font-semibold mt-3 text-gray-700">{user.first_name} {user.last_name}</h2>
                    <p className="text-gray-500 text-sm">{user.email}</p>

                    {/* Buttons */}
                    <div className="mt-4 flex space-x-3">
                        <button 
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                        <button 
                            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default UserCard;
