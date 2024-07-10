import React, { useState } from 'react';
import '../styles/PerfilForm.css';

const PerfilForm = () => {
    const [formData, setFormData] = useState({
        usuario: '',
        nombreCompleto: '',
        telefono: '',
        pais: '',
        fechaNacimiento: '',
        cv: '',
        descripcion: '',
        company: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="perfil-form">
            <h1>Perfil</h1>
            <label>
                Usuario:
                <input type="text" name="usuario" value={formData.usuario} onChange={handleChange} />
            </label>
            <label>
                Nombre Completo:
                <input type="text" name="nombreCompleto" value={formData.nombreCompleto} onChange={handleChange} />
            </label>
            <label>
                Teléfono:
                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
            </label>
            <label>
                País:
                <input type="text" name="pais" value={formData.pais} onChange={handleChange} />
            </label>
            <label>
                Fecha de Nacimiento:
                <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} />
            </label>
            <label>
                CV:
                <input type="file" name="cv" onChange={(e) => setFormData({ ...formData, cv: e.target.files[0] })} />
            </label>
            <label>
                Descripción:
                <textarea name="descripcion" value={formData.descripcion} onChange={handleChange}></textarea>
            </label>
            <label>
                Compañía:
                <input type="text" name="company" value={formData.company} onChange={handleChange} />
            </label>
            <label>
                Status:
                <input type="text" name="status" value={formData.status} onChange={handleChange} />
            </label>
            <button type="submit">Guardar</button>
        </form>
    );
};

export default PerfilForm;
