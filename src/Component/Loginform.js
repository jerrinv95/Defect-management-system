import { render } from '@testing-library/react';
import React from 'react';
import Defectview from './Defectview';

class Loginform extends React.Component
{
    
    constructor(props)
        {
            super(props);
            this.state = {name: '' , password: ''}
            
        }

        setDefState = (e) =>
        {
            e.persist();
            const value = e.target.value;
            const field = e.target.name;
            this.setState({[field]:value})
        }

        handleLogin = (e) => {
            e.preventDefault();
            alert('Welcome' );
        }
    
    render()
    {

        
        return(
            <React.Fragment>
            <div align="center"><h1>Defect Tracker</h1> 
            <br></br>
            <h5>Login</h5>
            </div>

            <div className="container">
                <form>
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" value={this.state.name} id='name' name="name" onChange={this.setDefState} />
                <br></br>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" value ={this.state.password} id="pwd" name="password" onChange={this.setDefState}/>
                <br></br>
                <button type="submit" onClick={this.handleLogin} >Login</button>
                </form>
            </div>

            </React.Fragment>
        )
    }
}

export default Loginform;