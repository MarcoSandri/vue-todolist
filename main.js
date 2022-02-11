const vue = new Vue({

    el : '#app',
    data : {
        newtodo: "",
        todolist: []
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
                event.currentTarget.style.textDecoration = "line-through"
            }
        }
    }
); 