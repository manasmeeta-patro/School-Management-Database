import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./app.css";

export default function ApiWithJson() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = 'http://localhost:3000/users';
    const navigate = useNavigate();

    const getUserData = useCallback(async () => {
        let res = await fetch(url);
        res = await res.json();
        console.log(res);
        setData(res);
        setLoading(false);
    }, [url]); // add dependencies if url is dynamic here optional

    useEffect(() => {
        setLoading(true);
        getUserData();
    }, [getUserData]); // ✅ now it's safe

    const deleteData = async (id) => {
        let res = await fetch(`${url}/${id}`, { method: 'DELETE' });
        res = await res.json();
        if (res) {
            alert("user deleted");
            getUserData();
        }
    };

    const editUser = (id) => {
        navigate(`/about/edit/${id}`);
    };

    return (
        <>
            {
                !loading ? (
                    <>
                        <h2>integrate json with api</h2>
                        {data.map((user) => (
                            <ul className="user-list" key={user.id}>
                                <li className="link">{user.id}</li>
                                <li className="link">{user.name}</li>
                                <li>{user.age}</li>
                                <li><button onClick={() => deleteData(user.id)}>Delete</button></li>
                                <li><button onClick={() => editUser(user.id)}>Edit</button></li>
                            </ul>
                        ))}
                    </>
                ) : (
                    <h1>data loading.........</h1>
                )
            }
        </>
    );
}
