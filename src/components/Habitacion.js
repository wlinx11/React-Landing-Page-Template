import React from 'react';

const Habitacion = ({ habitacion, eliminarHabitacion }) => {
  const { id, nombre, tipo, precio, descripcion } = habitacion;

  const handleEliminar = () => {
    eliminarHabitacion(id);
  };

  return (
    <div>
      <h3>{nombre}</h3>
      <p>Tipo: {tipo}</p>
      <p>Precio: {precio}</p>
      <p>Descripción: {descripcion}</p>
      <button onClick={handleEliminar}>Eliminar Habitación</button>
    </div>
  );
};

export default Habitacion;