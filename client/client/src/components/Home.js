import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import AgriData from './AgriData';
import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App(1).css';

function Home() {
    const [data, setData] = useState(AgriData);
    let navigate = useNavigate();

    const handleEdit = (id, name, type, description, price, image) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Type', type); // Changed from 'Age' to 'Type'
        localStorage.setItem('Description', description);
        localStorage.setItem('Price', price);
        localStorage.setItem('Image', image);
        localStorage.setItem('Id', id);
    };

    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
        navigate('/');
    };

    return (
        <Fragment>
            <div className="container">
                <h1>CRUD Operations (Create, Read, Update, Delete)</h1>
                <h3>Database Of AgriData</h3>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 ? (
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.type}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>{item.image}</td>
                                    <td className="actions">
                                        <Link to={`/edit`}>
                                            <Button className="btn btn-primary" onClick={() => handleEdit(item.id, item.name, item.type, item.description, item.price, item.image)}>EDIT</Button>
                                        </Link>
                                        &nbsp;
                                        <Button className="btn btn-danger" onClick={() => handleDelete(item.id)}>DELETE</Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="no-data">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <div className="add-button">
                    <Link to="/create">
                        <Button size="lg">Create</Button>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;
