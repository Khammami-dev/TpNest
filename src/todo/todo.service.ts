import { Todo } from '../to-do/modele/todo';
import { AddTodoDTO } from '../to-do/DTO/AddTodoDTO';
import { Injectable } from '@nestjs/common';
import { TodoStatusEnum } from '../to-do/enums/TodoStatusEnum';
import { isUUID } from '@nestjs/common/utils/is-uuid';
import { PatchTodoDTO } from '../to-do/DTO/PatchTodoDTO';

@Injectable()
export class todoService {
  todos: Todo[] = [];
  searchTodo(id): Todo {
    const todo: Todo =  this.todos.find(
      (todo) => todo.id === id
    );
    if (!todo) {
      throw new NotFoundException(`le todo d'id ${id} n'existe pas`);
    }
    return todo;
  }


  addTodo(todoData: AddTodoDTO) {
    // Destructring
    const {name, description} = todoData;

    const todo = new Todo();
    todo.description = description;
    todo.name = name;
    todo.date = new Date();
    todo.status = TodoStatusEnum.waiting;
    this.todos.push(todo);
    return todo;
  }
  patchTodo(id: string, newTodo: Partial<PatchTodoDTO>): Todo {
    const todo = this.searchTodo(id);
    todo.description = newTodo.description ?? todo.description;
    todo.name = newTodo.name ?? todo.name;
    todo.status = newTodo.status ?? todo.status;
    return todo;
  }
}
