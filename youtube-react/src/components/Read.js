import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Read = () => {

    const [data, setData] = useState([]);
    const [tabledark, setTabledark] = useState('');
    function getData() {
        axios.get("https://64510e3ca3221969115976a1.mockapi.io/crud-youtube")
            .then((res) => {
                console.log(res.data); //we have to store this data 
                setData(res.data);
            })
    }
    function handleDelete(id) {
        axios.delete(`https://64510e3ca3221969115976a1.mockapi.io/crud-youtube/${id}`)
            .then(() => {
                getData()
            })
    }
    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                    onClick={() => {
                        if (tabledark === 'table-dark') setTabledark("")
                        else setTabledark("table-dark")
                    }}
                />
            </div>
            <div className='d-flex justify-content-between m-2'>
                <h2>Read Opreration</h2>
                <Link to="/">
                    <button className='btn btn-secondary'>Create user</button>
                </Link>
            </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {
                    data.map((eachData) => {
                        return (
                            <>

                                <tbody key={eachData.id}>
                                    <tr>
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <Link to="/update">
                                            <td> <button className='btn-success' onClick={() =>
                                                setToLocalStorage(eachData.id, eachData.name, eachData.email)
                                            }>Edit</button> </td>
                                        </Link>
                                        <td> <button className='btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</button></td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Read