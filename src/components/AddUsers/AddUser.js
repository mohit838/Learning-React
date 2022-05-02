import React, { useRef } from 'react';
import Headers from '../Headers/Headers';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    
    const handleSubmitUser = (event) => {
        //Getting data form UI
        const userName = nameRef.current.value;
        const userEmail = emailRef.current.value;
        
        //Creating Objects of data for server
        const userData = {Name: userName, Email: userEmail};
        
        //Data send to server for post as POST method
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Added The User :D');
                event.target.reset();
            }
        })
        
        //Prevent the page load
        event.preventDefault();
        
    }
    
    return (
        <div>
            <Headers></Headers>
            <h1>This is Add users page</h1>
            <form onSubmit={handleSubmitUser}>
                <input type="text" ref={nameRef} placeholder="Name"/>
                <input type="email" ref={emailRef} placeholder="Email"/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddUser;