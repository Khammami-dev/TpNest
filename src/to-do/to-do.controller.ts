import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { TodoStatusEnum } from './enums/TodoStatusEnum';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './modele/todo';

@Controller('to-do')
export class ToDoController {

  todos: Todo [] = []; // creation objet todos de type tableau destodo qui est vide au départ

  @Get('')
  getTodos(): Todo[] {
    return this.todos;
  }
  @Post('Newtodo')
  addTodo(@Body() todoData
  ): Todo {
    /*dans l'objet todoData j'ai les deux propriétés : name, desription: récupére moi le contenu
    /*et met dans name et description dans ce cas name ='lundi' ; c'est description des objets
    /* 1- récupérer les info envoyer par l utilisateur avec @Body
       2- Instancier todo
       3- ajouter les infos manquante : id, date, status
       4- ajouter dans le tableau
       5- retourner l'objet qu'on a créer todo
       */
    const {name, description} = todoData;
    const todo = new Todo();
    todo.description = description;
    todo.name = name;
    todo.date = new Date();
    todo.status = TodoStatusEnum.waiting;
    todo.id = uuidv4;
    this.todos.push(todo);
    return todo;
  }
  @Delete(':id')
  DeleteTodo(){

  }
}
