import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentModule } from './agents/infra/nest/agent.module';

dotenv.config();
const uri = process.env.DATABASE_CONNECTION;
@Module({
  imports: [MongooseModule.forRoot(uri, {}), AgentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
