const vue = new Vue({

    el : '#app',
    data : {
        newtodo: "",
        todolist: [],
        line : false
        },
        methods: {
            //Aggiunge elemento alla lista
            addTodo() {
                //Controlla che la stringa non sia vuota e che non sia composta solamente da spazi
                //.trim() toglie spazi dall'inizio e fine della stringa
                if(this.newtodo.trim() != "") {
                    this.todolist.push(this.newtodo);
                    this.newtodo = "";
                } else {
                    this.newtodo = "";
                    document.getElementById('app').style.animation = "error 500ms linear 1";
                    setTimeout(this.removeAnimation, 500)
                }
            },
            //Elimina elemento dalla lista
            deleteTodo(index) {
                this.todolist.splice(index, 1)
            },
            //Sbarra elementi
            done(event) {
                if(!this.line) {
                    this.line = true;
                    event.currentTarget.classList.add("done")
                } else if(this.line) {
                    this.line = false;
                    event.currentTarget.classList.remove("done")
                }
            },
            //Rimuove animazione di errore
            removeAnimation(){
                document.getElementById('app').style.animation = "";
            }
        }
    }
); 