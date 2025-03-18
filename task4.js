function addTask() {
    let taskText = document.getElementById("task").value;
    let taskDateTime = document.getElementById("taskDateTime").value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText} (${taskDateTime})</span>
        <div class="task-buttons">
            <button onclick="markComplete(this)">✔</button>
            <button onclick="editTask(this)">✏</button>
            <button onclick="deleteTask(this)">❌</button>
        </div>
    `;

    taskList.appendChild(li);

    document.getElementById("task").value = "";
    document.getElementById("taskDateTime").value = "";
}

function markComplete(button) {
    let task = button.parentElement.parentElement;
    task.classList.toggle("completed");
}

function editTask(button) {
    let task = button.parentElement.parentElement;
    let newTaskText = prompt("Edit task:", task.firstChild.textContent.split(" (")[0]);

    if (newTaskText !== null) {
        let taskDateTime = prompt("Edit Date & Time:", task.firstChild.textContent.split("(")[1]?.slice(0, -1));

        task.innerHTML = `
            <span>${newTaskText} (${taskDateTime})</span>
            <div class="task-buttons">
                <button onclick="markComplete(this)">✔</button>
                <button onclick="editTask(this)">✏</button>
                <button onclick="deleteTask(this)">❌</button>
            </div>
        `;
    }
}

function deleteTask(button) {
    let task = button.parentElement.parentElement;
    task.remove();
}
