function agregarTarea() {
    const tareaInput = document.getElementById("imput");
    const tarea = tareaInput.value.trim();

    if(tarea !== ''){
        const lista = document.getElementById('lista');

        let listaItem = document.createElement( "li" );
        listaItem.innerHTML = tarea;

        const buttonEliminar = document.createElement('button');
        buttonEliminar.className='btn btn-danger m-2';
        buttonEliminar.innerHTML = 'Eliminar';

        buttonEliminar.onclick = function(){
            lista.removeChild(listaItem)
        }
        listaItem.appendChild(buttonEliminar);
        lista.appendChild(listaItem);

        tareaInput.value ='';
    }else{
        alert('Por favor ingrese un valor por teclado')
    }
}