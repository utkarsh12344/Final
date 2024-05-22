import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom';
import AgriData from './AgriData';
import './App(1).css';

function Add() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = uuid();
        const uniqueId = id.slice(0, 8);

        const newItem = {
            id: uniqueId,
            name: name,
            type: type,
            description: description,
            price: price,
            image: image
        };

        // Update state with the new item
        AgriData.push(newItem);

        // Navigate back to the home page
        history("/");
    }

    return (
        <div className="form-container">
            <h1 className="form-title">Add New AgriData</h1>
            <Form className="d-grid gap-2" onSubmit={handleSubmit}>
                <Form.Group className="form-group" controlId="formName">
                    <Form.Control className="form-control" type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="form-group" controlId="formType">
                    <Form.Control className="form-control" type="text" placeholder="Enter Type" required onChange={(e) => setType(e.target.value)} />
                </Form.Group>

                <Form.Group className="form-group" controlId="formDescription">
                    <Form.Control className="form-control" type="text" placeholder="Enter Description" required onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <Form.Group className="form-group" controlId="formPrice">
                    <Form.Control className="form-control" type="text" placeholder="Enter Price" required onChange={(e) => setPrice(e.target.value)} />
                </Form.Group>

                <Form.Group className="form-group" controlId="formImage">
                    <Form.Control className="form-control" type="text" placeholder="Enter Image" required onChange={(e) => setImage(e.target.value)} />
                </Form.Group>

                <div className="submit-button">
                    <Button className="btn btn-primary" type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );
}

export default Add;
