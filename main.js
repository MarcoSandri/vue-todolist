const vue = new Vue({

    el : '#app',
    data : {
        newtodo: "",
        todolist: [],
        line : false,
        },
        methods: {
            addTodo() {
                if(this.newtodo != "") {
                    this.todolist.push(this.newtodo);
                    this.newtodo = "";
                }
            },
            deleteTodo(index) {
                this.todolist.splice(index, 1)
            },
            done(event) {
                if(!this.line) {
                    this.line = true;
                    event.currentTarget.style.textDecoration = "line-through";
                } else if(this.line) {
                    this.line = false;
                    event.currentTarget.style.textDecoration = "none";
                }
            }
        }
    }
); 