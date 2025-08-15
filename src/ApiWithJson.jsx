import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function ApiWithJson() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = "http://localhost:3000/users";
    const navigate = useNavigate();

    const getUserData = useCallback(async () => {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Failed to fetch data");
            const json = await res.json();
            console.log(json);
            setData(json);
        } catch (error) {
            console.error(error);
            alert("Error fetching users");
        } finally {
            setLoading(false);
        }
    }, []); // url is constant, no need to add to dependencies

    useEffect(() => {
        getUserData();
    }, [getUserData]);

    const deleteData = async (id) => {
    try {
        const res = await fetch(`${url}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Delete request failed");
        alert("User deleted");
        getUserData(); // runs after
    } catch (error) {
        console.error(error);
        alert("Error deleting user");
    }
};


    const editUser = (id) => {
        navigate(`/about/edit/${id}`);
    };

    return (
        <>
            {loading ? (
                <h1>Data loading...</h1>
            ) : (
                <>
                    <h2>Integrate JSON with API</h2>
                    {data.map((user) => (
                        <ul className="user-list" key={user.id}>
                            <li className="link">{user.id}</li>
                            <li className="link">{user.name}</li>
                            <li>{user.age}</li>
                            <li>
                                <button onClick={() => deleteData(user.id)}>Delete</button>
                            </li>
                            <li>
                                <button onClick={() => editUser(user.id)}>Edit</button>
                            </li>
                        </ul>
                    ))}
                </>
            )}
        </> 
    );
}
