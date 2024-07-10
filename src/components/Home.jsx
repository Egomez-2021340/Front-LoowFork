import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <h1>Formularios</h1>
            <button onClick={() => navigate('/usuario')}>Usuario</button>
            <button onClick={() => navigate('/perfil')}>Perfil</button>
            <button disabled>Formulario 3</button>
            <button disabled>Formulario 4</button>
        </div>
    );
};

export default Home;
