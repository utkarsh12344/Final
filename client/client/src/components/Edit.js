import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import AgriData from './AgriData';
import { useNavigate } from 'react-router-dom';
import './App(1).css';

function Edit() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const [id, setId] = useState("");

    let history = useNavigate();

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setType(localStorage.getItem('Type'))
        setDescription(localStorage.getItem('Description'))
        setPrice(localStorage.getItem('Price'))
        setImage(localStorage.getItem('Image'))
        setId(localStorage.getItem('Id'))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        let index = AgriData.findIndex(item => item.id === id);

        if (index !== -1) {
            AgriData[index] = {
                id: id,
                name: name,
                type: type,
                description: description,
                price: price,
                image: image
            };
        }

        history("/");
    }

    return (
        <div className="form-container">
            <h1 className="form-title">Edit Products</h1>
            <Form className="d-grid gap-2" onSubmit={handleSubmit}>
                <Form.Group className="form-group" controlId="formName">
                    <Form.Control className="form-control" type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="form-group" controlId="formType">
                    <Form.Control className="form-control" type="text" placeholder="Enter Type" value={type} required onChange={(e) => setType(e.target.value)} />
                </Form.Group>

                <Form.Group className="form-group" controlId="formDescription">
                    <Form.Control className="form-control" type="text" placeholder="Enter Description" value={description} required onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <Form.Group className="form-group" controlId="formPrice">
                    <Form.Control className="form-control" type="text" placeholder="Enter Price" value={price} required onChange={(e) => setPrice(e.target.value)} />
                </Form.Group>

                <Form.Group className="form-group" controlId="formImage">
                    <Form.Control className="form-control" type="text" placeholder="Enter Image" value={image} required onChange={(e) => setImage(e.target.value)} />
                </Form.Group>

                <div className="submit-button">
                    <Button className="btn btn-primary" type="submit">Update</Button>
                </div>
            </Form>
        </div>
    );
}

export default Edit;
