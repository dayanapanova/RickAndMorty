import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ headerText }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <header>
            <span onClick={() => setIsOpen(!isOpen)}>toggle</span>
            {isOpen ? (<ul>
                <Link to='/'>Home</Link>
                <Link to='/credits'>Credits</Link>
            </ul>) : null}
        </header>

    )
};

export default Header;
