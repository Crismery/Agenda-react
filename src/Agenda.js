import React, { useState } from 'react';
import AgregarContacto from './AgregarContacto';
import ContactList from './ContactList';
import "./Agenda.css";

function Agenda() {
  const [contactos, setContactos] = useState([]);

  const agregarContacto = (contacto) => {
    fetch('http://www.raydelto.org/agenda.php', {
      method: 'POST',
      body: JSON.stringify(contacto),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.guardado) {
        setContactos([...contactos, contacto]);
      } else {
        alert('Error al guardar el contacto');
      }
    });
  };

  return (
    <div className='padre'>
      <AgregarContacto onAgregar={agregarContacto} />
      <ContactList contactos={contactos} />
    </div>
  );
}

export default Agenda;

