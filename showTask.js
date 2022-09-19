function renderTask(tasks) {
    const tbody = document.querySelector("#tasks tbody");
    tasks.forEach((task) => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.innerText = task.id;
        const titleCell = document.createElement('td');
        titleCell.innerText = task.title;
        const completedCell = document.createElement('td');
        completedCell.innerText = task.completed ? "✔️" : "❌";
        const actionsCell = document.createElement("td");
        const deleteButton = document.createElement("Button")//.onclick(deleteTask());
        deleteButton.innerText = "🗑️"
        actionsCell.appendChild(deleteButton);
        const editButton = document.createElement("Button");
        editButton.innerText = "✒️"
        actionsCell.appendChild(editButton);





        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(completedCell);
        row.appendChild(actionsCell);
        tbody.appendChild(row);

    });
}


function indexTask() {
    fetch('http://127.0.0.1:3000/tasks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        renderTask(data);
    }).catch(() => {
        alert("Something went wrong! :(");
    });
}

function deleteTask() {
    fetch('http://127.0.0.1:3000/tasks' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
document.addEventListener("DOMContentLoaded", () => {
    indexTask();

});