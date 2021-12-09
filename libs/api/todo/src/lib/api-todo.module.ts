import { Module } from '@nestjs/common';
import { ApiTodoController } from './api-todo.controller';
import { ApiTodoService } from './api-todo.service';
import { ApiPrismaModule } from '@simple-fullstack-todo/api/prisma';

@Module({
  controllers: [ApiTodoController],
  providers: [ApiTodoService],
  exports: [ApiTodoService],
  imports: [ApiPrismaModule]
})
export class ApiTodoModule {}
