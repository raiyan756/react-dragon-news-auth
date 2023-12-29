import React from 'react';
import moment from 'moment';
import logo from '../../../src/assets/logo.png'

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <p>{moment().format("dddd, MMMM  YYYY")}</p>
        </div>
    );
};

export default Header;