import { useState, useEffect } from 'react';

import { clearLocalStorageAuth } from './helpers/handleStorage';
import { getAuth, serverLoginUser, IStAuth, IStForm } from './components/Auth';

function App() {
	const [auth, setAuth] = useState<IStAuth>({});
	const [formLogin, setFormLogin] = useState<IStForm['inputs']>({
		email: '',
		password: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormLogin({
			...formLogin,
			[e.target.name]: [e.target.value],
		});
	};

	const handleLogout = () => {
		clearLocalStorageAuth();
		setAuth({
			auth: {},
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		serverLoginUser(formLogin).then((responseServerLogin) => {
			if (responseServerLogin.data.status === 1) {
				setAuth({
					auth: {
						timestamp: responseServerLogin.data.timestamp,
						token: responseServerLogin.data.token,
						email: responseServerLogin.data.email,
					},
				});
			}
		});
	};

	useEffect(() => {
		// check current loggin state
		getAuth().then((responseAuth) => {
			setAuth({
				auth: {
					timestamp: responseAuth.data.timestamp,
					token: responseAuth.data.token,
					email: responseAuth.data.email,
				},
			});
		});
	}, []);

	return (
		<div>
			<h1>App</h1>
			<ul>
				<li>e-mail: foo@mail.com</li>
				<li>password: 123</li>
			</ul>

			<pre>{JSON.stringify(auth, null, 1)}</pre>
			{auth.auth ? (
				<>
					{auth.auth?.token ? (
						<>
							<p>Logged</p>
							<button type='button' onClick={handleLogout}>
								Deslogar conta
							</button>
						</>
					) : (
						<form onSubmit={handleSubmit}>
							<label htmlFor='email'>
								<input
									type='email'
									name='email'
									id='email'
									value={formLogin.email}
									onChange={handleInputChange}
								/>
							</label>
							<br />
							<label htmlFor='password'>
								<input
									type='password'
									name='password'
									id='password'
									value={formLogin.password}
									onChange={handleInputChange}
								/>
							</label>

							<br />
							<button type='submit'>Submit Login</button>
						</form>
					)}
				</>
			) : (
				<>...</>
			)}
		</div>
	);
}

export default App;
