import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Headers from '../Headers/Headers';

const Users = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() =>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    
    //Delete an users
    const handleDeleteUser = (id) =>{
        const agree = window.confirm("You Want Delete???");
        if(agree){
            const url = `http://localhost:5000/users/${id}`
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('User Delete!!');
                    const deleteUser = users.filter(user => user._id !== id);
                    setUsers(deleteUser);
                }
            });
        }
    };
    
    
    return (
        <div>
            <Headers></Headers>
            <h1>This is users lists: {users.length}</h1>
            
            <div>
                <ul>
                    {
                        users.map(user => <li key={user._id}>
                        Name {user.Name}<br></br>
                        Email: {user.Email} 
                        {/* <button>Update</button> */}
                        <Link to={`/update/users/${user._id}`}><button>Update</button></Link>
                        <button onClick={()=>handleDeleteUser(user._id)}>Delete</button>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Users;