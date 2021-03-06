import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, Request } from '@nestjs/common';
import { TodoStatusEnum } from './enums/TodoStatusEnum';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './modele/todo';
import { AddTodoDTO } from './DTO/AddTodoDTO';
import { todoService } from '../todo/todo.service';
import { PatchTodoDTO } from './DTO/PatchTodoDTO';

@Controller('to-do')
export class ToDoController {
  constructor(private todoService: todoService) {
  }

  todos: Todo [] = []; // creation objet todos de type tableau destodo qui est vide au départ

  @Get('')
  getTodos(@Req() req:Request ): Todo[] {
    console.log(req);
    return this.todos;
  }
  @Post('Newtodo')
  addTodo(
    @Body() todoData: AddTodoDTO
  ): Todo {

    return this.todoService.addTodo();
  }
  @Get(':id')
  getTodoById(
    @Param('id') id: string  //récupere le id avec @param dans la variable id de type string
  ): Todo   {
   return  this.todos.find(
       (todo : Todo) => todo.id === id);
  }
  @Delete('delete/:id')
  DeletTodoById(
    @Param('id') id:string): String {
    const todo = this.todos.find((todo: Todo) => todo.id === id);
    const todoIndex = this.todos.findIndex((todo: Todo) => todo.id === id);
    if (todoIndex > 0) {
      this.todos.splice(todoIndex, 1);
      return 'suppression avec succès ';
    } else {
      return  "cette todo n'existe pas";
    }

  }
  @Patch('update/:id')
  ModifierTodo(@Param('id') id, @Body() todoData : Partial<PatchTodoDTO>): Todo{
    const todo = this.todos.find((todo : Todo) => todo.id === id);
    if(todo != todoData){
      todo.name = todoData.name;
      todo.description=todoData.description;
    }
    return todo;

  }


  @Put('updateP/:id')
  ModifierPartieTodo(@Param('id') id, @Body() todoData: ) : Todo{
    //<partial> on utilise si il passe une partie de l'objet dans le body
    const todo = this.todos.find((todo : Todo) => todo.id === id);
    if (todo.name != todoData.name){
       todo.name=todoData.name;
    }
    if (todo.description != todoData.description){
      todo.description = todoData.description;
    }
   return todo;
  }



}
