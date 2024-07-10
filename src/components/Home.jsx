import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Bienvenido a la Aplicación de Trabajo</h1>
            <button onClick={() => navigate('/usuario')}>Usuario</button>
            <button onClick={() => navigate('/perfil')}>Perfil</button>
            <button onClick={() => navigate('/company')}>Company</button>
            <button onClick={() => navigate('/postwork')}>PostWork</button>
        </div>
    );
}

export default Home;
