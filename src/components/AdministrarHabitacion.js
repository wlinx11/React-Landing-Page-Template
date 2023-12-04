import React, { useEffect, useState } from 'react';
import FormularioHabitacion from './FormularioHabitacion';
import ListadoHabitaciones from './ListadoHabitaciones';

const AdministrarHabitaciones = () => {
  return (
    <div>
      <h1>Administrar Habitaciones</h1>
      <FormularioHabitacion />
      <ListadoHabitaciones />
    </div>
  );
};

export default AdministrarHabitaciones;
