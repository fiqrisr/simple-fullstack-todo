import { Module } from '@nestjs/common';
import { ApiTodoModule } from '@simple-fullstack-todo/api/todo';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiTodoModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
