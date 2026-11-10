const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20 },
  { id: 2, nombre: 'Juan', edad: 22 },
  { id: 3, nombre: 'María', edad: 21 },
];


function buscarEstudiantePorId(id) {
  return new Promise((resolve, reject) => {
    const estudiante = estudiantes.find(estudiante => estudiante.id === id);
    if (estudiante) {
      resolve(estudiante);
    } else {
      reject(new Error(`No existe un estudiante con el ID ${id}.`));
    }
  });
}

buscarEstudiantePorId(2)
  .then(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
  })
  .catch(error => {
    console.error(error);
  });

buscarEstudiantePorId(10)
  .then(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
  })
  .catch(error => {
    console.error(error);
  });
