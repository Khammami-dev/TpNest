import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  ToDoList= ['faire douche','faire Yoga','faire Meditation'];
  @Get('todo')
  getToDo(): string[] {
    return this.ToDoList;
  }
  @Get('todo/first')
  getToDoFirst(): string {
    return this.ToDoList[0];
  }
  @Post('newTodo')
  addTodo(): string {
    this.ToDoList.push('Reviser Nest');
    return 'Reviser Nest';
  }

}
