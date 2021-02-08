import { Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { todo } from './modele/todo';

@Controller('to-do')
export class ToDoController {

  todos: todo [] = [];

  @Get('')
  getTodos(): todo[] {
    return this.todos;
  }
  @Post('Newtodo')
  addTodo(@Query('name') name, @Query('description') description): todo [] {
    //
    this.todos.push(name);
    this.todos.push(description);
    return todos;


  }
  @Delete(':id')
  DeleteTodo(){

  }
}
