
const todosApp ={

    data() {
        return {
            todos:[],
            newTodo:{
                done: false
            }
        }
    },
    methods : {
        addTodo(){
            if(this.newTodo.text){
                this.todos.push(this.newTodo)
                this.newTodo = {
                    done:false
                }
                localStorage.setItem("todos",JSON.stringify(this.todos));
            }else{
                alert('Por favor,adicione uma tarefa.')
            }
        },
        storeTodos(){
            localStorage.setItem("todos",JSON.stringify(this.todos));
        }
    },
    created() {
       this.todos = localStorage.getItem("todos") ? JSON.parse( this.todos = localStorage.getItem("todos")) : this.todos;
    },
    updated() {
       
    }

}

Vue.createApp(todosApp).mount('#app');

