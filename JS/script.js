console.log('VUE-OK', Vue);

const { createApp } = Vue;

const app = createApp({
    name: 'ToDo List App',
    data() {
        return {
            //* Array to store tasks
            tasks: tasks,

            //* Search term for filtering tasks
            searchTerm: '',

            //* Text for adding new tasks
            newTaskText: '',

            //* Pre-filled message for no tasks
            defaultNoTasksMessage: 'Non ci sono task disponibili',
            dynamicNoTasksMessage: '',
        };
    },
    computed: {
        //* Filtered tasks based on the search term
        filteredTasks() {
            return this.tasks.filter(task =>
                task.text.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        },
        //* Computed property to know if there are tasks
        hasTasks() {
            return this.filteredTasks.length > 0;
        },
        //* Computed property to dynamically generate the noTasksMessage based on the search term
        noTasksMessage() {
            if (this.searchTerm.trim() !== '') {
                this.dynamicNoTasksMessage = `Non ci sono task disponibili contenenti: "${this.searchTerm}".`;
                return this.dynamicNoTasksMessage;
            } else {
                return this.defaultNoTasksMessage;
            }
        },
    },
    methods: {
        //* Method to add a new task
        addTask() {
            if (this.newTaskText.trim() !== '') {
                //* Create a new task object
                const newTask = {
                    id: Date.now(),
                    done: false,
                    text: this.newTaskText.trim()
                };
                //* Add the new task to the tasks array
                this.tasks.push(newTask);
                //* Clear the new task text input
                this.newTaskText = '';
            }
        },
        //* Method to delete a task by its ID
        deleteTask(taskId) {
            //* Filter out the task with the specified ID
            this.tasks = this.tasks.filter(task => task.id !== taskId);
        }
    }
});

app.mount('#root');



