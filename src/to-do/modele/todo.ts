import { TodoStatusEnum } from '../enums/TodoStatusEnum';


export class Todo{
  id: string;
  name: string;
  description: string;
  date: Date;
  status: TodoStatusEnum; // la status ne peut etre que en attente en voours ou finaliser seulement


}