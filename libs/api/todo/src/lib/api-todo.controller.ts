import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param
} from '@nestjs/common';
import { Todo } from '@prisma/client';
import { ApiTodoService } from './api-todo.service';

@Controller('todo')
export class ApiTodoController {
  constructor(private apiTodoService: ApiTodoService) {}

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return await this.apiTodoService.getAllTodos();
  }

  @Post()
  async addTodo(@Body() { text }: { text: string }) {
    return await this.apiTodoService.addTodo(text);
  }

  @Patch(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() { text }: { text: string }
  ) {
    return await this.apiTodoService.updateTodo(id, text);
  }

  @Patch(':id/set')
  async setTodo(@Param('id') id: string, @Body() { done }: { done: boolean }) {
    return await this.apiTodoService.setTodo(id, done);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    return await this.apiTodoService.deleteTodo(id);
  }
}
