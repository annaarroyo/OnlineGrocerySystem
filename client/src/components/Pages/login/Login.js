import React, {Component} from "react";
import { Redirect } from 'react-router-dom';
import "./Login.css"

class Login extends Component {

	constructor() {
        super();
		this.option = 1;
        this.state = {
			option: 1,
            redirect: false,
            email: '',
            password: '',
			creds: {}
		};
		this.handleChange = this.handleChange.bind(this);
    };

	async handleSubmit(event) {
		event.preventDefault();
		if(this.state.email === '' || this.state.password === ''){
			alert("Please make sure both email and password are filled out.")
		}
		else {
			await fetch('login/' + this.state.email)
				.then(res => res.json())
				.then(creds => this.setState({creds}));
			if (this.state.creds === null || this.state.password !== this.state.creds.password) {
				alert("Bad username or password. Please try again.");
			} 
			else {
				this.setState({redirect: true});
			}
		}
	};

	handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
     };

	renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
    };

	form () {
		return (
			<form className='account-form' onSubmit={(evt) => evt.preventDefault()}>
				<div className={'account-form-fields ' + (this.state.option === 1 ? 'sign-in' :  'sign-up') }>
					<input id='email' name='email' type='email' placeholder='E-mail' value={this.state.email} onChange={this.handleChange} required />
					<input id='password' name='password' type='text' placeholder='Password' value={this.state.password} onChange={this.handleChange} required/>
				</div>
				{this.renderRedirect()}
				<button 
				className='btn-submit-form' 
				type='submit' 
				onClick={e => this.handleSubmit(e)} > 
					Sign in
				</button>
			</form>
		)
	}

	create () {
		return (
			<form className='account-form' onSubmit={(evt) => evt.preventDefault()}>
				<div className={'account-form-fields ' + (this.state.option === 1 ? 'sign-in' :  'sign-up') }>
					<input id='firstName' name='firstName' type='text' placeholder='First Name' required/>
					<input id='lastName' name='lastName' type='text' placeholder='Last Name' required/>
					<input id='email' name='email' type='email' placeholder='E-mail' required />
					<input id='password' name='password' type='password' placeholder='Password' required/>
					<input id='phoneNumber' name='phoneNumber' type='text' placeholder='Phone Number' required/>
				</div>
				<button className='btn-submit-form' type='submit' onClick={ e => this.handleSubmit(e) }>
					Sign up
				</button>
			</form>
		)
	}

	render () {
		return (
			<div className='container'>
				<header>
					<div className={'header-headings ' + (this.state.option === 1 ? 'sign-in' : 'sign-up') }>
						<span>Sign in to your account</span>
						<span>Create an account</span>
					</div>
				</header>
				<ul className='options'>
					<li className={this.state.option === 1 ? 'active' : ''} onClick={() => this.setState({option: 1})}>Sign in</li>
					<li className={this.state.option === 2 ? 'active' : ''} onClick={() => this.setState({option: 2})}>Sign up</li>
				</ul>
				{this.state.option === 1 ? this.form(): this.create()}
			</div>
		)
	};
}

export default Login;