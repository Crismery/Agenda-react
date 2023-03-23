import React, { useState } from 'react';
import  "./AgregarContacto.css";

function AgregarContacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://www.raydelto.org/agenda.php', {
      method: 'POST',
      body: JSON.stringify({ nombre, email, telefono }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.guardado) {
      } else {
        alert('Error al guardar el contacto');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
       <h2>Agregar contacto</h2>
        <label className='label' htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </div>
      <div>
        <label className='label' htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label className='label' htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          value={telefono}
          onChange={(event) => setTelefono(event.target.value)}
        />
      </div>
      <button className='boton' type="submit">Agregar contacto</button>
    </form>
  );
}
export default AgregarContacto;

