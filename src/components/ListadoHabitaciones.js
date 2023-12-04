import React, { useEffect, useState } from 'react';
import Habitacion from './Habitacion';
import db from '../../firebase'; // Importa la conexión a Firebase desde firebase.js

const ListadoHabitaciones = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    const fetchHabitaciones = async () => {
      try {
        const habitacionesRef = db.collection('habitaciones');
        const snapshot = await habitacionesRef.get();
        const habitacionesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setHabitaciones(habitacionesData);
      } catch (error) {
        // Manejo de errores
        console.error('Error al obtener las habitaciones:', error);
      }
    };

    fetchHabitaciones();
  }, []);

  const eliminarHabitacion = async (id) => {
    try {
      await db.collection('habitaciones').doc(id).delete();
      // Actualizar el estado local después de la eliminación
      setHabitaciones(habitaciones.filter(habitacion => habitacion.id !== id));
    } catch (error) {
      // Manejo de errores
      console.error('Error al eliminar la habitación:', error);
    }
  };

  return (
    <div>
      {habitaciones.map(habitacion => (
        <Habitacion
          key={habitacion.id}
          habitacion={habitacion}
          eliminarHabitacion={eliminarHabitacion}
        />
      ))}
    </div>
  );
};

export default ListadoHabitaciones;
