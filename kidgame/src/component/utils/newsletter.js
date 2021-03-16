import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addNewsletter } from '../../store/actions';

const NewsLetter = () => {
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();
    const textInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        dispatch(addNewsletter({email:value}))
    }
    return (
        <>
            <div className="newsletter_container">
                <h1>Join our newsletter</h1>
                <div className="form">
                    <Form onSubmit={handleSubmit} className="mt-4">
                        <Form.Group>
                            <Form.Control 
                                type="text"
                                placeholder="Enter your email..."
                                name="email"
                                ref={textInput}
                            />
                        </Form.Group>
                        <Button 
                            variant="outline-dark"
                            type="submit"
                        >
                            Add me to the list
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default NewsLetter;