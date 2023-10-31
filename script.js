document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
        
    });

    taskList.addEventListener("click", function (e) {
        if (e.target && e.target.classList.contains("delete-button")) {
            deleteTask(e.target.parentElement);
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }

    function deleteTask(task) {
        task.remove();
    }
});
