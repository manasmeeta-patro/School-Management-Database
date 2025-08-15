import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserEdit() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [userid, setUserId] = useState("");
    const [age, setAge] = useState("");

    // ✅ Use environment variable for API base URL for normal react for vite need to use import.
    // const API_URL = process.env.REACT_APP_API_URL;
    const API_URL = import.meta.env.VITE_API_URL;

    const url = `${API_URL}/users/${id}`;

    const navigate = useNavigate();

    // Fetch user data when component loads
    useEffect(() => {
        const getUserData = async () => {
            try {
                let res = await fetch(url);
                if (!res.ok) throw new Error("Failed to fetch user data");
                let data = await res.json();
                setName(data.name || "");
                setAge(data.age || "");
                setUserId(data.userid || "");
            } catch (err) {
                console.error(err);
                alert("Error fetching user");
            }
        };
        getUserData();
    }, [url]);

    // Update user data
    const updateUser = async () => {
        try {
            let res = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userid, name, age })
            });
            if (!res.ok) throw new Error("Failed to update user");
            alert("User updated successfully");
            navigate("/about");
        } catch (err) {
            console.error(err);
            alert("Error updating user");
        }
    };

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter user name"
            />
            <br />
            <input
                type="text"
                value={userid}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter user ID"
            />
            <br />
            <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age"
            />
            <br />
            <button onClick={updateUser}>Edit user</button>
        </>
    );
}
