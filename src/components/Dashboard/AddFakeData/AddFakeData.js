import React from 'react';

const AddFakeData = () => {
    const handleAddProduct = () => {
        const fakeData = {};
        
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(fakeData[0])
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div align="center">
            <button onClick={handleAddProduct}>Add FakeData</button>
        </div>
    );
};

export default AddFakeData;