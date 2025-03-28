const url = "http://localhost:3000/";
const solicitud = async (url) => {
  const respuesta = await fetch(`${url}city`);
  const datos = await respuesta.json();
  return datos;
}

const guardar = () => {
  fetch('http://localhost:3000/city', {
    method: 'POST',
    body: JSON.stringify({
      title: 'ADSO_prueba',
      body: 'Jefferson',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

guardar();