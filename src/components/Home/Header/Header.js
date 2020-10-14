import React from 'react';
import BrandInfo from '../BrandInfo/BrandInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <div className='header-container'>
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
            <BrandInfo></BrandInfo>
        </div>
    );
};

export default Header;