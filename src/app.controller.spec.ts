import { Test, type TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import type { Kysely } from 'kysely';
import type { KyselyDb } from './database/types';

describe('AppController', () => {
  let appController: AppController;
  let dbMock: Partial<Kysely<KyselyDb>>; // Use Partial to mock only needed methods

  beforeEach(async () => {
    // Create a mock Kysely instance
    dbMock = {
      selectFrom: jest.fn().mockReturnThis(),
      innerJoin: jest.fn().mockReturnThis(),
      selectAll: jest.fn().mockReturnThis(),
      insertInto: jest.fn().mockReturnThis(),
      values: jest.fn().mockReturnThis(),
      execute: jest.fn().mockResolvedValue([]), // Simulated empty response
    } as Partial<Kysely<KyselyDb>>;

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: 'KyselyModuleConnectionToken', // Correct injection token
          useValue: dbMock, // Mocked instance
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should return an empty array', async () => {
    const result = await appController.getProducers();
    expect(result).toEqual([]); // Expecting empty array as per mock
  });
});
