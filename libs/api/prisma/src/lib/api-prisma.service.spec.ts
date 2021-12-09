import { Test } from '@nestjs/testing';
import { ApiPrismaService } from './api-prisma.service';

describe('ApiPrismaService', () => {
  let service: ApiPrismaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiPrismaService],
    }).compile();

    service = module.get(ApiPrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
