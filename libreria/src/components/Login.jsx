/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../css/login.css';


export const Login = ({ setIsLogged }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username && password) {
            localStorage.setItem('username', JSON.stringify(username));
            localStorage.setItem('password', JSON.stringify(password));
            setIsLogged(true);
        } else {
            alert('Por favor, completa todos los campos.');
        }
    };


    return (
        <>
            <div className='container'>
                <div className="login-container">
                    <h2>Login</h2>
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={handleLogin}
                        disabled={!username || !password}
                    >
                        Iniciar Sesión
                    </button>
                </div>
            </div>

        </>
    )
}
