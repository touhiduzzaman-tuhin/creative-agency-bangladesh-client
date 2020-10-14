import React from 'react';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const BrandInfo = () => {
    return (
        <div className='text-center mt-5'>
            <img className='mr-5' src={slack} alt="" height="40px"/>
            <img className='mr-5' src={google} alt="" height="40px"/>
            <img className='mr-5' src={uber} alt="" height="40px"/>
            <img className='mr-5' src={netflix} alt="" height="40px"/>
            <img className='mr-5' src={airbnb} alt="" height="40px"/>
        </div>
    );
};

export default BrandInfo;