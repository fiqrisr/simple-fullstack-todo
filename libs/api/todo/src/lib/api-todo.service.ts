import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { ApiPrismaService } from '@simple-fullstack-todo/api/prisma';

@Injectable()
export class ApiTodoService {
  constructor(private prisma: ApiPrismaService) {}

  async getAllTodos(): Promise<Todo[]> {
    return await this.prisma.todo.findMany();
  }

  async addTodo(text: string): Promise<Todo> {
    return await this.prisma.todo.create({ data: { text, done: false } });
  }

  async updateTodo(id: string, text: string): Promise<Todo> {
    return await this.prisma.todo.update({
      where: { id },
      data: { text }
    });
  }

  async setTodo(id: string, done: boolean): Promise<Todo> {
    return await this.prisma.todo.update({
      where: { id },
      data: { done }
    });
  }

  async deleteTodo(id: string) {
    return await this.prisma.todo.delete({
      where: { id }
    });
  }
}
