import {
    onGetTasks,
    saveTask,
    deleteTask,
    getTask,
    updateTask,
} from "./firebase.js";

const taskForm = document.getElementById("task-form");
const addTag = document.getElementById("btn-add-tag");
const tasksContainer = document.getElementById("tasks-container");

const taskTagsInput = document.getElementById("task-tags");
const tagsContainer = document.getElementById("tags-container");
const tags = [];

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async (e) => {
    onGetTasks((querySnapshot) => {
        tasksContainer.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const task = doc.data();
            
            // Crear una lista de etiquetas como una cadena HTML
            const tagsHTML = task.tags.map((tag) => `
                <span class="badge bg-primary">${tag}</span>
            `).join("");

            tasksContainer.innerHTML += `
                <div class="card card-body mt-0 border-primary">
                <h3 class="h5">${task.title}</h3>
                <p>Due Date: ${task.dueDate}</p>
                <p>Priority: ${task.priority}</p>
                <p>Description: ${task.description}</p> 
                <p>Tags: ${tagsHTML} </p>
                <div>
                    <button class="btn btn-primary btn-delete" data-id="${doc.id}">
                    🗑 Delete
                    </button>
                    <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
                    🖉 Edit
                    </button>
                </div>
                </div>`;
        });

        const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
        btnsDelete.forEach((btn) =>
            btn.addEventListener("click", async ({ target: { dataset } }) => {
                try {
                    await deleteTask(dataset.id);
                } catch (error) {
                    console.log(error);
                }
            })
        );

        const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
        btnsEdit.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                try {
                    const doc = await getTask(e.target.dataset.id);
                    const task = doc.data();
                    taskForm["task-title"].value = task.title;
                    taskForm["task-description"].value = task.description;
                    taskForm["task-dueDate"].value = task.dueDate;
                    taskForm["task-priority"].value = task.priority;
                    renderTags();
                    editStatus = true;
                    id = doc.id;
                    taskForm["btn-task-form"].innerText = "Update";
                } catch (error) {
                    console.log(error);
                }
            });
        });
    });
});

taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = taskForm["task-title"];
    const description = taskForm["task-description"];
    const dueDate = taskForm["task-dueDate"];
    const priority = taskForm["task-priority"];

    try {
        if (!editStatus) {
            await saveTask(title.value, description.value, dueDate.value, priority.value, tags);
        } else {
            await updateTask(id, {
                title: title.value,
                description: description.value,
                dueDate: dueDate.value,
                priority: priority.value,
                tags: tags,
            });

            editStatus = false;
            id = "";
            taskForm["btn-task-form"].innerText = "Save";
        }

        taskForm.reset();
        title.focus();
    } catch (error) {
        console.log(error);
    }
});

addTag.addEventListener("click", () => {
    const tagValue = taskTagsInput.value.trim();
    if (tagValue) {
        tags.push(tagValue);
        taskTagsInput.value = "";
        renderTags();
    }
});

const renderTags = () => {
    tagsContainer.innerHTML = "";
    tags.forEach((tag) => {
        tagsContainer.innerHTML += `
        <span class="badge bg-primary me-1">${tag}</span>
      `;
    });
};
