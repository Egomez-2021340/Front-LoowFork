import React, { useState } from 'react';
import '../styles/CompanyForm.css';

function CompanyForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        eslogan: '',
        direccion: '',
        tamano: '',
        pagina: '',
        descripcion: ''
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
        <form onSubmit={handleSubmit} className="company-form">
            <h1>Company</h1>
            <label>
                Nombre:
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
            </label>
            <label>
                Eslogan:
                <input type="text" name="eslogan" value={formData.eslogan} onChange={handleChange} />
            </label>
            <label>
                Dirección:
                <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
            </label>
            <label>
                Tamaño:
                <select name="tamano" value={formData.tamano} onChange={handleChange}>
                    <option value="">Seleccione el tamaño de la empresa</option>
                    <option value="Microempresa">Microempresa: 1 a 9 trabajadores</option>
                    <option value="Pequeña">Pequeña: 10 a 49 trabajadores</option>
                    <option value="Mediana">Mediana: 50 a 199 trabajadores</option>
                    <option value="Gran empresa">Gran empresa: 200 o más trabajadores</option>
                </select>
            </label>
            <label>
                Página:
                <input type="url" name="pagina" value={formData.pagina} onChange={handleChange} />
            </label>
            <label>
                Descripción:
                <textarea name="descripcion" value={formData.descripcion} onChange={handleChange}></textarea>
            </label>
            <button type="submit">Guardar</button>
        </form>
    );
}

export default CompanyForm;
