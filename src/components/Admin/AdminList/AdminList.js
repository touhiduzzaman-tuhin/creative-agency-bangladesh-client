import React, { useEffect, useState } from 'react';
import AdminDataTable from '../AdminDataTable/AdminDataTable';
import AdminSidebar from '../AdminSidebar/AdminSidebar';


const AdminList = () => {
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        fetch('https://salty-crag-40522.herokuapp.com/admins')
        .then(res => res.json())
        .then(data => setAdmin(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-center">Total {admin.length} Admin</h5>
                <AdminDataTable admin={admin}></AdminDataTable>
            </div>
        </div>
    );
};

export default AdminList;