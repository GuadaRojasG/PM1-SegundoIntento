class ToDoList {
    constructor() {
        this.ToDoList = []
    }

    getToDos = () => this.ToDoList

    addToDo = (toDo) => {
        this.ToDoList.push(toDo)
    }

    deleteToDo = (toDo) => {
        this.ToDoList.pop()
    }
}

export default ToDoList