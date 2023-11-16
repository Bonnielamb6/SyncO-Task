document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".tasksDots");
    const ulList = document.querySelector(".tasks ul");

    addButton.addEventListener("click", function () {
        const newLi = document.createElement("li");

        newLi.innerHTML = `
            <span class="tasksIconName">
                <span class="tasksIcon done">
                    <span class="material-symbols-outlined">
                        check
                    </span>
                </span>
                <span class="tasksName">
                    Nueva Tarea
                </span>
            </span>
            <span class="tasksStar full">
                <span class="material-symbols-outlined">
                    star
                </span>
            </span>
        `;

        ulList.appendChild(newLi);
    });
});


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



//CALENDARIO
$(document).ready(function () {
    var monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth();
    var currentMonth = month;
    var year = now.getFullYear();


    initCalender();
    console.log(startDay());

    function initCalender() {
        console.log(monthName[month]);
        $("#text_month").text(monthName[month]);

        $(".item_day").remove();

        for (let i = startDay(); i > 0; i--) {
            $(".container .right main .container_calendar .calendarData .days").append
                (`<span class="week_days_item item_day prev_days">${getTotalDays(month - 1) - (i - 1)}</span>`);
        }

        for (let i = 1; i <= getTotalDays(month); i++) {
            if (i == day && month == currentMonth) {
                $(".container .right main .container_calendar .calendarData .days").append
                    (`<span class="week_days_item item_day today">${i}</span>`);
            } else {
                $(".container .right main .container_calendar .calendarData .days").append
                    (`<span class="week_days_item item_day">${i}</span>`);
            }
        }
    }
    function getNextMonth() {
        if (month !== 11) {
            month++;
        } else {
            year++;
            month = 0;
        }
        initCalender();
    }
    function getPrevMonth() {
        if (month !== 0) {
            month--;
        } else {
            year--;
            month = 11;
        }
        initCalender();
    }
    function startDay() {
        var start = new Date(year, month, 1);
        return ((start.getDate() - 1) === -1) ? 6 : start.getDay();
    }

    function leapMonth() {
        return ((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0));
    }

    function getTotalDays() {
        if (month === -1) month = 11;

        var numMonthReal = month + 1;

        if (numMonthReal == 1 || numMonthReal == 3 || numMonthReal == 5 || numMonthReal == 7 || numMonthReal == 8 || numMonthReal == 10 || numMonthReal == 12) {
            return 31;
        } else if (numMonthReal == 4 || numMonthReal == 6
            || numMonthReal == 9 || numMonthReal == 11) {
            return 30;
        } else {
            return leapMonth() ? 29 : 28;
        }
    }

    $("#next_month").click(function () {
        getNextMonth();

    });
    $("#last_month").click(function () {
        getPrevMonth();

    })
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

//Crear project cards
document.addEventListener('DOMContentLoaded', function () {

    createProjectCard("Tarea 1", "Casa", "50%", "Alta", "Lavar los trastes", "10/20/2023");
    
    function createProjectCard(tituloTarea, tag, progreso, prioridad, descripcionTarea, fechaEntrega, tituloTarea2, tag2, progreso2, prioridad2, descripcionTarea2, fechaEntrega2) {
        if (tituloTarea == undefined) {
            tituloTarea = "";
        }
        if (tituloTarea2 == undefined) {
            tituloTarea2 = "";
        }
        if (tag == undefined) {
            tag = "";
        }
        if (tag2 == undefined) {
            tag2 = "";
        }
        if (prioridad == undefined) {
            prioridad = "";
        }
        if (prioridad2 == undefined) {
            prioridad2 = "";
        }
        if (descripcionTarea == undefined) {
            descripcionTarea = "";
        }
        if (descripcionTarea2 == undefined) {
            descripcionTarea2 = "";
        }
        if (fechaEntrega == undefined) {
            fechaEntrega = "Sin limite de entrega";
        }
        if (fechaEntrega2 == undefined) {
            fechaEntrega2 = "Sin limite de entrega";
        }
        const containerProjectCards = document.querySelector("main");
        if (containerProjectCards) {
            const newProjectCard = document.createElement("div");
            newProjectCard.className = "projectCard";
            newProjectCard.innerHTML = `
            <div class="projectCard">
                    
                    <div class="projectTop">
                        <h2>${tituloTarea}<br><span>${tag}</span></h2>
                        <div class="projectDots">
                            <span class="material-symbols-outlined">
                                more_horiz
                            </span>
                        </div>
                    </div>
                    
                    <div class="projectProgress">
                        <div class="priority">
                            <h2>${prioridad}</h2>
                        </div>
                    </div>
                    
    
                    
                    <div class="task">
                        <h2>${descripcionTarea}</h2>
                    </div>
                    
                    <div class="due">
                        <h2>${fechaEntrega}</h2>
                    </div>
                    
                </div>
                
            `;
            containerProjectCards.appendChild(newProjectCard);
    
            const newProjectCard2 = document.createElement("div");
            newProjectCard2.className = "projectCard projectCard2";
            newProjectCard2.innerHTML = `
            <div class="projectCard">
                    
                    <div class="projectTop">
                        <h2>${tituloTarea2}<br><span>${tag2}</span></h2>
                        <div class="projectDots">
                            <span class="material-symbols-outlined">
                                more_horiz
                            </span>
                        </div>
                    </div>
                    
                    <div class="projectProgress">
                        <div class="priority">
                            <h2>${prioridad2}</h2>
                        </div>
                    </div>
                    
    
                    
                    <div class="task">
                        <h2>${descripcionTarea2}</h2>
                    </div>
                    
                    <div class="due">
                        <h2>${fechaEntrega2}</h2>
                    </div>
                    
                </div>
                
            `;
            containerProjectCards.appendChild(newProjectCard2);
    
        } else {
            console.log("Error al agregar un projectCard");
        }
    
    }
    });