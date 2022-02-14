const vue = new Vue({

    el : '#app',
    data : {
        newtodo: "",
        todolist: []
        },
        methods: {
            //Aggiunge elemento alla lista
            addTodo() {
                //Controlla che la stringa non sia vuota e che non sia composta solamente da spazi
                //.trim() toglie spazi dall'inizio e fine della stringa
                if(this.newtodo.trim() != "") {
                    const newTodoObj = {
                        text: this.newtodo,
                        line: false
                    };
                    this.todolist.push(newTodoObj);
                    this.newtodo = "";
                } else {
                    this.newtodo = "";
                    //Animazione di errore
                    document.getElementById('app').style.animation = "error 500ms linear 1";
                    setTimeout(this.removeAnimation, 500);
                }
            },
            //Elimina elemento dalla lista
            deleteTodo(index) {
                this.todolist.splice(index, 1);
            },
            //Sbarra elementi
            lineThrough(index) {
                this.todolist[index].line = !this.todolist[index].line;

            },
            //Rimuove animazione di errore
            removeAnimation(){
                document.getElementById('app').style.animation = "";
            }
        }
    }
); 