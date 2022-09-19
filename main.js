
        function createTask(task){
            fetch('http://127.0.0.1:3000/tasks', {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            }).then(() => {
                window.location.href = "./showTask.html";
            }).catch(() => {
                alert("Something went wrong! :(");
            });
        };

        document.addEventListener('DOMContentLoaded', () => {
            const createTaskForm = document.getElementById('createTaskForm');
            createTaskForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const createTaskFormData = new FormData(createTaskForm);
                createTask({title: createTaskFormData.get('title')});
            });
        });
