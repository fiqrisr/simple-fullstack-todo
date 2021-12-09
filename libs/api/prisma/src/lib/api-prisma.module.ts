import { Module } from '@nestjs/common';
import { ApiPrismaService } from './api-prisma.service';

@Module({
  controllers: [],
  providers: [ApiPrismaService],
  exports: [ApiPrismaService],
})
export class ApiPrismaModule {}
