import { Test, TestingModule } from '@nestjs/testing';
import { TuiterController } from './tuiter.controller';

describe('TuiterController', () => {
  let controller: TuiterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TuiterController],
    }).compile();

    controller = module.get<TuiterController>(TuiterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
