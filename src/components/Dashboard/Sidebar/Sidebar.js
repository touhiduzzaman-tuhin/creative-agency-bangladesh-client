import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCartPlus, faHome, faCar, faComment, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [isDoctor, setIsDoctor] = useState(false);

    // useEffect(() => {
    //     fetch('https://salty-plateau-71286.herokuapp.com/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsDoctor(data));
    // }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <img src={logo} alt="" height="40px"/>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                         <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {<div>
                    <li>
                        <Link to="/addOrder" className="text-white">
                            <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/patient" className="text-white">
                            <FontAwesomeIcon icon={faCar} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="text-white">
                            <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;