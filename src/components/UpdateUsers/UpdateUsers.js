import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Headers from '../Headers/Headers';

const UpdateUsers = () => {
    const {id} = useParams();
    const [userData, setUeserData ] = useState({});
    
    //Data fetch from database using user ID
    useEffect(()=>{
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUeserData(data))
    }, [id]);
    
    const handleUpdateUser = (event) => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Update Successful!!!');
                setUeserData({});
            }
            
        })
        event.preventDefault();
    };
    
    const handleNameChange = (event) => {
        const updateName = event.target.value;
        const updateUser = {Name: updateName, Email: userData.Email};
        setUeserData(updateUser);
        
    };
    
    const handleEmailChange = (event) => {
        const updateEmail = event.target.value;
        const updateUser = {Name: userData.Name, Email: updateEmail};
        setUeserData(updateUser)
    };
    
    return (
        <div>
            <Headers></Headers>
            <h1>Update Users Here</h1>
            {/* Update User Data Form */}
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleNameChange} type="text" value={userData.Name} />
                <input onChange={handleEmailChange} type="email" value={userData.Email} />
                <button>Update</button>
            </form>
            
        </div>
    );
};

export default UpdateUsers;