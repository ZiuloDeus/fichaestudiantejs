
document.body.innerHTML = `
  <form id="fichaEstudiante" style="max-width:400px;margin:auto;">
    <h2>Ficha de Estudiante</h2>
    <label>Nombre:<br><input type="text" name="nombre" required></label><br><br>
    <label>Apellido:<br><input type="text" name="apellido" required></label><br><br>
    <label>Email:<br><input type="email" name="email" required></label><br><br>
    <label>Contraseña:<br><input type="password" name="password" required></label><br><br>
    <label>Repetir Contraseña:<br><input type="password" name="repetirPassword" required></label><br><br>
    <label>Dirección:<br><input type="text" name="direccion" required></label><br><br>
    <label>Teléfono:<br><input type="tel" name="telefono" required></label><br><br>
    <label>Fecha de nacimiento:<br><input type="date" name="fechaNacimiento" required></label><br><br>
    <button type="submit">Registrar</button>
    <button type="button" id="cancelarBtn">Cancelar</button>
  </form>
`;


document.getElementById('fichaEstudiante').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    email: form.email.value,
    password: form.password.value,
    repetirPassword: form.repetirPassword.value,
    direccion: form.direccion.value,
    telefono: form.telefono.value,
    fechaNacimiento: form.fechaNacimiento.value
  };

  
  const password = data.password;
  const regexMayuscula = /[A-Z]/;
  const regexNumero = /[0-9]/;
  if (!regexMayuscula.test(password) || !regexNumero.test(password)) {
    alert('La contraseña debe contener al menos una letra mayúscula y un número.');
    return;
  }

  if (data.password !== data.repetirPassword) {
    alert('Las contraseñas no coinciden.');
    return;
  }


  console.log('Enviando a la base de datos:', data);
  alert('Registro enviado.');
  form.reset();
});


document.getElementById('cancelarBtn').addEventListener('click', function() {
  document.getElementById('fichaEstudiante').reset();
});
