import React, { useState } from "react";

function EditUserForm({ user, onUpdate, onCancel }) {
    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [email, setEmail] = useState(user.email);
    const [loading, setLoading] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const updatedUser = { ...user, first_name: firstName, last_name: lastName, email };

        fetch(`https://reqres.in/api/users/${user.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUser),
        })
        .then(res => res.json())
        .then(() => {
            onUpdate(updatedUser);
        })
        .finally(() => setLoading(false));
    }

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg w-80 space-y-4">
            <h2 className="text-lg font-semibold text-gray-700 text-center">Edit User</h2>

            {/* First Name */}
            <div>
                <label className="block text-sm font-medium text-gray-600">First Name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                    disabled={loading}
                />
            </div>

            {/* Last Name */}
            <div>
                <label className="block text-sm font-medium text-gray-600">Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                    disabled={loading}
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                    disabled={loading}
                />
            </div>

            {/* Buttons: Save & Cancel */}
            <div className="flex justify-between">
                <button 
                    type="button"
                    onClick={onCancel} 
                    className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-500 transition"
                    disabled={loading}
                >
                    Cancel
                </button>
                
                <button 
                    type="submit" 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition flex items-center justify-center"
                    disabled={loading}
                >
                    {loading ? "Saving..." : "Save Changes"}
                </button>
            </div>
        </form>
    );
}

export default EditUserForm;

