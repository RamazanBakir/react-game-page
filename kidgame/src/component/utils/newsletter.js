import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addNewsletter,clearNewsletter  } from '../../store/actions';
import { showToast } from './tools';

const NewsLetter = () => {
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();
    const textInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        dispatch(addNewsletter({email:value}))
    }

    useEffect(() => {
        if(userData.newsletter) {
            if(userData.newsletter === "added") {
                showToast('SUCCESS', "Thank you for subscribing !!!");
                textInput.current.value="";
            }
            else {
                showToast('ERROR', "You already subscribed to newsletter ");
                textInput.current.value="";
            }
        }
    },[userData]);

    useEffect(() => {
       return () => {
           dispatch(clearNewsletter())
       }
    },[dispatch])

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