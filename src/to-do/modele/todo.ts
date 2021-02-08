import { TodoStatusEnum } from '../enums/TodoStatusEnum';


export class todo {
  id: string;
  name: string;
  description: string;
  date: Date;
  status: TodoStatusEnum;
}