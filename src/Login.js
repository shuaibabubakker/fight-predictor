
import React from "react";
import { Link } from "react-router-dom";

import "./login.css";

class LoginComponent extends React.Component {
    
    render() {
        return (
            <div>
                <div className={`form-block-wrapper`} ></div>
                <section className={`form-block`}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <header  className={`head`}>
                      <center> <h2>Admin Login </h2></center> 
                    </header>
                    <LoginForm  onSubmit={this.props.onSubmit} />
                </section>
            </div>
        )
    }
}

class LoginForm extends React.Component {
    
    render() {
        return (
        <form onSubmit={this.props.onSubmit}>
            <div className="form-block__input-wrapper">
                <div className="form-group form-group--login">
                    <Input type="text" id="username" label="Username" />
                    <Input type="password" id="password" label="Password" />
                </div>
               
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Link to="/floor">
                <button className="button1"  type="submit">Log In</button>
            </Link>
        </form>
        )
    }
}

const Input = ({ id, type, label, disabled }) => (
    <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled}/>
);

const Login = () => (
    <div className={`app app--is-login `}>
        <LoginComponent
            onSubmit={
                function() {
                    console.log('submit');
                }
            }
        />
    </div>
  );
  
export default Login;