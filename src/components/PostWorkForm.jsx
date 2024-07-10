import React, { useState } from 'react';
import '../styles/PostWorkForm.css';

function PostWorkForm() {
    const [formData, setFormData] = useState({
        perfil: '',
        title: '',
        company: '',
        descripcion: '',
        telefonoCompany: '',
        encargado: '',
        telefonoEncargado: '',
        direccion: '',
        salario: '',
        tipoTrabajo: '',
        pais: '',
        fechaPublicacion: '',
        cantidadPlazas: '',
        solicitudTrabajo: '',
        state: ''
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
        <form onSubmit={handleSubmit} className="postwork-form">
            <label>
                Perfil:
                <input type="text" name="perfil" value={formData.perfil} onChange={handleChange} />
            </label>
            <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </label>
            <label>
                Company:
                <input type="text" name="company" value={formData.company} onChange={handleChange} />
            </label>
            <label>
                Descripción:
                <textarea name="descripcion" value={formData.descripcion} onChange={handleChange}></textarea>
            </label>
            <label>
                Teléfono de la Empresa:
                <input type="tel" name="telefonoCompany" value={formData.telefonoCompany} onChange={handleChange} />
            </label>
            <label>
                Encargado:
                <input type="text" name="encargado" value={formData.encargado} onChange={handleChange} />
            </label>
            <label>
                Teléfono del Encargado:
                <input type="tel" name="telefonoEncargado" value={formData.telefonoEncargado} onChange={handleChange} />
            </label>
            <label>
                Dirección:
                <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
            </label>
            <label>
                Salario:
                <input type="number" name="salario" value={formData.salario} onChange={handleChange} />
            </label>
            <label>
                Tipo de Trabajo:
                <input type="text" name="tipoTrabajo" value={formData.tipoTrabajo} onChange={handleChange} />
            </label>
            <label>
                País:
                <input type="text" name="pais" value={formData.pais} onChange={handleChange} />
            </label>
            <label>
                Fecha de Publicación:
                <input type="date" name="fechaPublicacion" value={formData.fechaPublicacion} onChange={handleChange} />
            </label>
            <label>
                Cantidad de Plazas:
                <input type="number" name="cantidadPlazas" value={formData.cantidadPlazas} onChange={handleChange} />
            </label>
            <label>
                Solicitud de Trabajo:
                <textarea name="solicitudTrabajo" value={formData.solicitudTrabajo} onChange={handleChange}></textarea>
            </label>
            <label>
                Estado:
                <select name="state" value={formData.state} onChange={handleChange}>
                    <option value="">Seleccione el estado</option>
                    <option value="aprobado">Aprobado</option>
                    <option value="cerrado">Cerrado</option>
                    <option value="pendiente">Pendiente</option>
                    <option value="rechazado">Rechazado</option>
                </select>
            </label>
            <button type="submit">Guardar</button>
        </form>
    );
}

export default PostWorkForm;
