import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const history = useNavigate();
    const header = { "Access-Control-Allow-Origin": "*" };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
        axios.post(
            'https://64510e3ca3221969115976a1.mockapi.io/crud-youtube', {
            name: name, email: email,
            header,

        })
            .then(() => {
                history("/read");
            })
    }
    return (
        <>
            <form>
                <div className='d-flex justify-content-between m-2'>
                    <h1>create</h1>
                    <Link to="/read">
                        <button className='btn btn-primary'>show data</button>
                    </Link>
                </div>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

            </form>
        </>
    )
}

export default Create
