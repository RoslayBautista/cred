import React, { useState } from 'react';

const CrearTareas = () => {
    const [nombreTareaNueva, setNombreNuevaTarea] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('Tarea', nombreTareaNueva);
        setNombreNuevaTarea('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingrese tarea"
                value={nombreTareaNueva}
                onChange={(e) => setNombreNuevaTarea(e.target.value)}
            />
            <button type="submit">Guardar tarea</button>
        </form>
    );
};

export default CrearTareas;
