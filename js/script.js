document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector(".tasksDots");
    const ulList = document.querySelector(".tasks ul");

    addButton.addEventListener("click", function() {
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