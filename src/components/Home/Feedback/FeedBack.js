import React, { useEffect, useState } from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';

const feedbackData = [
    {
        name: 'Nash Patrik',
        img: customer1,
        rank: 'CEO, MANPOL'
    },
    {
        name: 'Miriam Barmon',
        img: customer2,
        rank: 'CEO, FREELAND'
    },
    {
        name: 'Bria Malone',
        img: customer3,
        rank: 'CEO, DARAZZ'
    }
];

const FeedBack = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setFeedback(data))
    }, [])

    
    // heroku = 'https://salty-crag-40522.herokuapp.com/'


    // const handleAddProduct = () => {

    //     fetch('http://localhost:5000/addReview', {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json'
    //         },
    //         // body: JSON.stringify(fakeData[0])
    //         body: JSON.stringify(feedbackData)
    //     })
    // }
    return (
        <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h3>Client <span style={{color: '#7AB259'}}>FeedBack</span></h3>
               </div>
               <div className="card-deck mt-5">
                    {
                        feedbackData.map(feedback => <FeedbackDetail feedback={feedback} key={feedback.name}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default FeedBack;