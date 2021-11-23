import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    { todo: 'todo 1', completed: false },
    { todo: 'todo 1', completed: false },
    { todo: 'todo 1', completed: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(f) {
    const newTodo: string = f.value.todo;
    this.todos.push({ todo: newTodo, completed: false });
    f.reset();
  }

  deleteTodo(i) {
    this.todos = this.todos.filter((todo, index) => index !== i);
  }
}
