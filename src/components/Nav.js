import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <>
            <Link className='nav' to='/'>Login</Link>
            <Link className='nav' to='/create-account'>Create Account</Link>
            {/* <Link className='nav' to='/todos'>Todos</Link> */}
            </>
        );
    }
}

export default Nav;