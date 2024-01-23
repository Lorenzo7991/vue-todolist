console.log('VUE-OK', Vue);

const { createApp } = Vue;

const app = createApp({
    name: 'ToDo List App',
    data() {
        return {
            tasks: tasks,
            searchTerm: '',
            newTaskText: ''
        };
    },
    //TODO: Metodi per aggiungere ed eliminare i task
});

app.mount('#root');

