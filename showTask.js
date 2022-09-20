function renderTask(tasks) {
    const tbody = document.querySelector("#tasks tbody");
    tbody.replaceChildren([]);
    tasks.forEach((task) => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.innerText = task.id;
        const titleCell = document.createElement('td');
        titleCell.innerText = task.title;
        const completedCell = document.createElement('td');
        completedCell.innerText = task.completed ? "✔️" : "❌";
        const actionsCell = document.createElement("td");
        const deleteButton = document.createElement("Button");
        deleteButton.innerText = "🗑️"
        deleteButton.addEventListener("click", (id) => {
            fetch('http://127.0.0.1:3000/task/' + task.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
        }).then(() => {
            indexTask();
        });
    });
        actionsCell.appendChild(deleteButton);
        const editButton = document.createElement("Button");
        editButton.innerText = "✒️"
        editButton.addEventListener("click", () => {
            fetch('http://127.0.0.1:3000/task/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json' 
                }
            })


        })
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

/*function updateTask() {
    fetch('http://127.0.0.1:3000/tasks', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}*/

document.addEventListener("DOMContentLoaded", () => {
    indexTask();

});
