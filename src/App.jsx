import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PerfilForm from './components/PerfilForm';
import UsuarioForm from './components/UsuarioForm';
import CompanyForm from './components/CompanyForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/perfil" element={<PerfilForm />} />
                <Route path="/usuario" element={<UsuarioForm />} />
                <Route path="/company" element={<CompanyForm />} />
            </Routes>
        </Router>
    );
}

export default App;
