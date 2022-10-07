if(localStorage.token != ""){
    alert("Por Favor cierre Sesión");
    document.getElementById('formulario').remove();
    document.querySelector('.login-registro').innerHTML = '<h2>Por Favor <a href="#" onclick="salir()">Cierre Sesión</a><h2>';
}

async function registrarUsuarios(evt) {
    evt.preventDefault()
    const form = evt.target
    
    let datos = {};
    datos.nombre = form.txtNombre.value ;
    datos.apellido = form.txtApellido.value ;
    datos.telefono = form.txtTelefono.value ;
    datos.email = form.txtEmail.value ;
    datos.password = form.txtPassword.value ;

    

    let repetirPassword = form.txtRepetirPassword.value

    if(repetirPassword != datos.password){
        alert('La contraseña que escribiste es diferente.');
        return;
    }

    const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        //JSON.stringify lo que hace es coger cualquier objeto de javascript
        //y lo convierte a un string de JSON
        body: JSON.stringify(datos)
    });
    alert("La cuenta fue creada con éxito!");
    window.location.href = 'index.html';
}
