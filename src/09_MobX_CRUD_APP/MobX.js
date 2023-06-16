import { action, makeAutoObservable, observable } from "mobx";

class Todo {
    todos = [{ title: "demo", disc: "discDemo" }];
    constructor() {
        makeAutoObservable(this, {
            todos: observable,
            add: action,
            delete: action,
            update: action,
        });
    }

    add(title, disc) {
        this.todos = [...this.todos, { title, disc }];
    }
    delete(index) {
        this.todos.splice(index, 1);
    }
    update(index, title, disc) {
        const newTodos = this.todos.map((data) => {
            if (this.todos[index]) {
                return {
                    ...data,
                    title: title,
                    disc: disc,
                };
            } else {
                return {
                    ...data,
                };
            }
        });

        this.todos = newTodos;
    }
    search(text) {}
}

export const todo = new Todo();
