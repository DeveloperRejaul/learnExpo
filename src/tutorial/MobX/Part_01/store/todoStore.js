import { action, makeAutoObservable, makeObservable } from "mobx";

class TodoStore {
    todo = ["todo 01", "todo 02"];

    constructor() {
        makeAutoObservable(this);
    }
    get getTodo() {
        return this.todo;
    }
    setTodo(data) {
        this.todo = [...this.todo, data];
    }
    updateTodo(data, index) {
        this.todo = this.todo.map((d, i) => {
            if (index == i) {
                return data;
            } else {
                return d;
            }
        });
    }
    deleteTodo(index) {
        this.todo = this.todo.filter((d, i) => i !== index);
    }
}

export const todoStore = new TodoStore();
