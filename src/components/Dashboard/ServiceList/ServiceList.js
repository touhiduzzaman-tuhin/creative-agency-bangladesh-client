import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const ServiceList = () => {
    const [service, setService] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect( () => {
        fetch('https://salty-crag-40522.herokuapp.com/orderByEmail?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            {
                
            }
        </div>
    );
};

export default ServiceList;