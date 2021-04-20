import React, {useState} from "react";
import "./Login.css"

function Form ({ option }) {
	return (
		<form className='account-form' onSubmit={(evt) => evt.preventDefault()}>
			<div className={'account-form-fields ' + (option === 1 ? 'sign-in' :  'sign-up') }>
				<input id='email' name='email' type='email' placeholder='E-mail' required />
				<input id='password' name='password' type='password' placeholder='Password' required/>
			</div>
			<button className='btn-submit-form' type='submit'>
				{ option === 1 ? 'Sign in' :  'Sign up' }
			</button>
		</form>
	)
}

export default function LogIn () {
	const [option, setOption] = useState(1)

	return (
		<div className='container'>
			<header>
				<div className={'header-headings ' + (option === 1 ? 'sign-in' : 'sign-up') }>
					<span>Sign in to your account</span>
					<span>Create an account</span>
				</div>
			</header>
			<ul className='options'>
				<li className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>• Sign in</li>
				<li className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>Sign up</li>
			</ul>
			<Form option={option} />
		</div>
	)
}
