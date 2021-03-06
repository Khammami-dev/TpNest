import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test2Module } from './test2/test2.module';
import { ToDoModule } from './to-do/to-do.module';
import { TodoService } from './todo/todo.service';

@Module({
  imports: [Test2Module, ToDoModule], //on met ici l'ensemble des modules qu'on a besoin pour faire fonctionner ce module
  controllers: [AppController],
  providers: [AppService, TodoService],
})
export class AppModule {}
