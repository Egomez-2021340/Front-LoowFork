import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PerfilForm from './components/PerfilForm';
import UsuarioForm from './components/UsuarioForm';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/perfil" element={<PerfilForm />} />
                <Route path="/usuario" element={<UsuarioForm />} />
            </Routes>
        </div>
    );
};

export default App;
