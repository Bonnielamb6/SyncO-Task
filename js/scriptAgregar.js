import {
    onGetUsers,
    onGetTasks,
    saveTask,
    deleteTask,
    getTask,
    updateTask,
    getAllUsers
} from "./firebase.js";


document.addEventListener('DOMContentLoaded', function () {


    const nuevaTarea = document.getElementById("formularioAgregar");

    const enviarTareaButton = document.getElementById('enviar');
    const primerInput = document.getElementById("subTask");
    const contenedorInputsAdicionales = document.getElementById('subtareas');

    function crearInputAdicional() {
        const nuevoInput = document.createElement('input');
        nuevoInput.type = 'text';
        nuevoInput.placeholder = 'Información adicional';
        nuevoInput.className = 'inputAdicional';
        nuevoInput.addEventListener('input', function () {
            // Al modificar el último input adicional, crear uno nuevo
            if (esUltimoInputAdicional(nuevoInput)) {
                const otroNuevoInput = crearInputAdicional();
                contenedorInputsAdicionales.appendChild(otroNuevoInput);
            }
        });
        return nuevoInput;
    }

    function esUltimoInputAdicional(input) {
        const hijos = contenedorInputsAdicionales.getElementsByClassName('inputAdicional');
        return input === hijos[hijos.length - 1];
    }

    primerInput.addEventListener('input', function () {
        actualizarInputsAdicionales();
    });

    function actualizarInputsAdicionales() {
        // Limpiar el contenedor de inputs adicionales
        contenedorInputsAdicionales.innerHTML = '';

        // Obtener el valor del primer input
        const valorPrimerInput = primerInput.value.trim();

        // Verificar si el valor no está vacío
        if (valorPrimerInput !== '') {
            // Crear un nuevo input adicional
            const nuevoInput = crearInputAdicional();
            contenedorInputsAdicionales.appendChild(nuevoInput);
        }
    }


    const primerInputTag = document.getElementById("tag");
    const contenedorInputsAdicionalesTags = document.getElementById('tags');

    function crearInputAdicionalTags() {
        const nuevoInput = document.createElement('input');
        nuevoInput.type = 'text';
        nuevoInput.placeholder = 'Información adicional';
        nuevoInput.className = 'inputAdicional';
        nuevoInput.addEventListener('input', function () {
            // Al modificar el último input adicional, crear uno nuevo
            if (esUltimoInputAdicionalTags(nuevoInput)) {
                const otroNuevoInput = crearInputAdicionalTags();
                contenedorInputsAdicionalesTags.appendChild(otroNuevoInput);
            }
        });
        return nuevoInput;
    }

    function esUltimoInputAdicionalTags(input) {
        const hijos = contenedorInputsAdicionalesTags.getElementsByClassName('inputAdicional');
        return input === hijos[hijos.length - 1];
    }

    primerInputTag.addEventListener('input', function () {
        actualizarInputsAdicionalesTags();
    });

    function actualizarInputsAdicionalesTags() {
        // Limpiar el contenedor de inputs adicionales
        contenedorInputsAdicionalesTags.innerHTML = '';

        // Obtener el valor del primer input
        const valorPrimerInputTag = primerInputTag.value.trim();

        // Verificar si el valor no está vacío
        if (valorPrimerInputTag !== '') {
            // Crear un nuevo input adicional
            const nuevoInput = crearInputAdicionalTags();
            contenedorInputsAdicionalesTags.appendChild(nuevoInput);
        }
    }




    enviarTareaButton.addEventListener('click', async function () {
        // Tu lógica de envío del formulario aquí

        const radioButtons = document.getElementsByName('task-priority');

        let valorSeleccionado = null;

        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                valorSeleccionado = radioButton.value;
                break;  // Una vez que encuentras uno seleccionado, puedes salir del bucle
            }
        }

        const taskTitle = document.getElementById('taskTitle').value;
        const dueDate = document.getElementById('task-dueDate').value;
        const timeBegin = document.getElementById('task-timeBegin').value;
        const timeEnd = document.getElementById('task-timeEnd').value;
        const description = document.getElementById('task-description').value;
        const subTask = document.getElementById('subTask').value;
        const priority = valorSeleccionado;
        var tag = document.getElementById("tag").value;


        console.log(`Titulo: ${taskTitle}, Fecha: ${dueDate}, Tiempo: ${timeBegin}, TiempoFin: ${timeEnd}, Descripcion: ${description}, Subtareas: ${subTask}, Prioridad: ${priority}, Tag: ${tag}`);

        try {
            //if (!editStatus) {
            await saveTask(taskTitle, description, dueDate, priority, tag);
            // } else {
            //     await updateTask(id, {
            //         title: title.value,
            //         description: description.value,
            //         dueDate: dueDate.value,
            //         priority: priority.value,
            //         tags: tags,
            //     });

            //     editStatus = false;
            //     id = "";
            //     nuevaTarea["enviar"].innerText = "Mandar tarea";
            // }

            //nuevaTarea.reset();
            //title.focus();
        } catch (error) {
            console.log(error);
        }


    });

    getAllUsers("userList");
}); 