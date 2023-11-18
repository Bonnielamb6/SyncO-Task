// document.addEventListener("DOMContentLoaded", function () {
//     const addButton = document.querySelector(".tasksDots");
//     const ulList = document.querySelector(".tasks ul");

//     addButton.addEventListener("click", function () {
//         const newLi = document.createElement("li");

//         newLi.innerHTML = `
//             <span class="tasksIconName">
//                 <span class="tasksIcon done">
//                     <span class="material-symbols-outlined">
//                         check
//                     </span>
//                 </span>
//                 <span class="tasksName">
//                     Nueva Tarea
//                 </span>
//             </span>
//             <span class="tasksStar full">
//                 <span class="material-symbols-outlined">
//                     star
//                 </span>
//             </span>
//         `;

//         ulList.appendChild(newLi);
//     });
// });


//MENU DE HAMBURGUESA
document.addEventListener('DOMContentLoaded', function () {
    let toggle = document.querySelector('.toggle');
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let cerrar = document.querySelector('.close');
    let body = document.querySelector('body');


    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        left.classList.toggle('active');
        right.classList.toggle('overlay');
        body.style.overflow = 'hidden';
    });
    cerrar.onclick = () => {
        toggle.classList.remove('active');
        left.classList.remove('active');
        right.classList.remove('overlay');
        body.style.overflow = '';
    };
    window.onclick = (e) => {
        if (e.target == right) {
            toggle.classList.remove('active');
            left.classList.remove('active');
            right.classList.remove('overlay');
            body.style.overflow = '';
        }
    };
});







//Mandar correo a persona de nueva tarea
document.addEventListener('DOMContentLoaded', function () {


    //sendEmail("edgartrabajos2205@gmail.com","Esta es una prueba con parametros");

    function sendEmail(toEmail, message) {

        // Envía el correo electrónico
        emailjs.send("service_u4l7y3t", "template_7axdjtj", { to_email: toEmail, message })
            .then(function (response) {
                console.log("Correo enviado con éxito", response);
            })
            .catch(function (error) {
                console.error("Error al enviar el correo", error);
            });
    }
});


