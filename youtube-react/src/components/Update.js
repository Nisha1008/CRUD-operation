import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));

    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://64510e3ca3221969115976a1.mockapi.io/crud-youtube/${id}`,
            {
                name: name,
                email: email,
            }
        ).then(() => {
            navigate("/read");
        })
    }

    return (
        <>
            <form>
                <h1>Update</h1>

                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" value={name} id="username" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate}>update</button>
                <Link to="/read">   <button className='btn btn-secondary mx-2'>Back</button></Link>
            </form>

        </>
    )
}

export default Update
