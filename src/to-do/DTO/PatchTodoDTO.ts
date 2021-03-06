import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ErrorMsg } from '../MessagToDo/ErrorMsg';

export  class PatchTodoDTO{
  @IsNotEmpty({
    message: ErrorMsg.isEmptyMessage
    }

  )

  @MinLength(3,{
    message: ErrorMsg.MinLengthMessage
    }
  )
  @MaxLength(10, {
      message: ErrorMsg.MaxLengthMessage
    }
    )
  name: string;
  @IsNotEmpty(
    {
      message: ErrorMsg.isEmptyMessage
    }
  )
  @MaxLength(10, {
    message: ErrorMsg.MaxLengthMessage
    }
  )
  description: string;
}
