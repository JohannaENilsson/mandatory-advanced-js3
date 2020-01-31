import React from 'react';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('Login');
    }

    handleInput(){
        console.log('input');

    }


    render(){
        return(
            <div className='container'>
                Login
                <form onSubmit={this.handleInput}> 
                    <input type='email' value={this.state.email} onChange={this.handleInput}/>
                    <input  type='password' value={this.state.email} onChange={this.handleInput}/>
                    <input type='submit' value='Register'/>
                </form>
                
            </div>
        );
    }
}

export default Login; 