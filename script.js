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


