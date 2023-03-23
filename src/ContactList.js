import React, { useState, useEffect } from 'react';

function ContactList() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    fetch('http://www.raydelto.org/agenda.php')
      .then(response => response.json())
      .then(data => {
        setContactos(data);
      });
  }, []);

  return (
    <div>
      <h2>Listado de contactos:</h2>
      <ul>
        {contactos.map(contacto => (
          <li key={contacto.id}>
            <div>{contacto.nombre}</div>
            <div>{contacto.email}</div>
            <div>{contacto.telefono}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
