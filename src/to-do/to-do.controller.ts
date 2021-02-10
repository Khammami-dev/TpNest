import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
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
    todo.id = uuidv4();
    todo.description = description;
    todo.name = name;
    todo.date = new Date();
    todo.status = TodoStatusEnum.waiting;

    this.todos.push(todo);
    return todo;
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
  ModifierTodo(@Param('id') id, @Body() todoData): Todo{
    const todo = this.todos.find((todo : Todo) => todo.id === id);
    if(todo != todoData){
      todo.name = todoData.name;
      todo.description=todoData.description;
    }
    return todo;

  }


  @Put('updateP/:id')
  ModifierPartieTodo(@Param('id') id, @Body() todoData: Partial<Todo>) : Todo{
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
