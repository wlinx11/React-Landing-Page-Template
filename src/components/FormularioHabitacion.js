import React, { useState } from 'react';
import db from '../../firebase'; // Importa la conexión a Firebase desde firebase.js

const FormularioHabitacion = () => {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realiza la creación o actualización de la habitación en Firebase
      await db.collection('habitaciones').add({
        nombre,
        tipo,
        precio,
        descripcion,
      });

      // Limpiar el formulario después de la creación o actualización
      setNombre('');
      setTipo('');
      setPrecio('');
      setDescripcion('');
    } catch (error) {
      // Manejo de errores
      console.error('Error al agregar o editar la habitación:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" placeholder="Tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} />
      <input type="text" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      <input type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      <button type="submit">Agregar/Editar Habitación</button>
    </form>
  );
};

export default FormularioHabitacion;