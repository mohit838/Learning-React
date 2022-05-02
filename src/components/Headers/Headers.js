import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Headers = () => {
    return (
        <div>
            <div style={{textAlign:'center'}}>
                <nav 
                    style={{
                      borderBottom: "solid 1px",
                      paddingBottom: "1rem",
                    }}> 
                        <Link to="/home">Home</Link> |{" "}
                        <Link to="/users">Users</Link> |{" "}
                        <Link to="/users/add">Add User</Link>
                </nav>
                <Outlet />
            </div>
        </div>
    );
};

export default Headers;