import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('AgentController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/public/agent (POST)', async () => {
    const send_data = {
      name: 'Jhon Due',
      login: 'jhons',
      medias: {
        voice: {
          min: 1,
          max: 100,
          selected: 0,
          handleMode: 'AUTO',
          device: 'SANSUNG',
          devicePassword: 'secret',
        },
        email: {
          min: 1,
          max: 1,
          selected: 1,
        },
        chat: {
          min: 1,
          max: 1,
          selected: 1,
          handleMode: 'AUTO',
        },
      },
      password: 'secret',
    };
    return await request(app.getHttpServer())
      .post('/public/agent')
      .send(send_data)
      .expect(201);
  });
});
