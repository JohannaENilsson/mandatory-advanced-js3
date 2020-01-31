import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <>
            <Link className='Nav' to='/'>Login</Link>
            <Link className='Nav' to='/create-account'>Create Account</Link>
            </>
        );
    }
}

export default Nav;