import React, { useState } from 'react';

function UsuarioForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Email:', email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>User</h1>
            <div>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
}

export default UsuarioForm;
