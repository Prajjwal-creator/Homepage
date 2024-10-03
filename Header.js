import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import './Header.css';

const Header = () => (
    <header className="header">
        <div>DEV@Deakin</div>
        <Input icon='search' placeholder='Search...' />
        <div>
            <Button basic>Post</Button>
            <Button basic>Login</Button>
        </div>
    </header>
);

export default Header;
