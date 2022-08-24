import React from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import MainMenu from '../MainMenu/MainMenu';
import '../../CSS/Header.css';
const Header = () => {
    return (
        <div className="header">
            <MainMenu></MainMenu>
            <HeaderContent></HeaderContent>
        </div>
    );
};

export default Header;