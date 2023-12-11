import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentController } from './agent.controller';
import { Agent, AgentSchema } from '../db';
import { AGENT_PROVIDERS } from './agent.provider';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Agent.name, schema: AgentSchema }]),
  ],
  controllers: [AgentController],
  providers: [
    AGENT_PROVIDERS.REPOSITORIES.AGENT_SEQUELIZE_REPOSITORY,
    ...Object.values(AGENT_PROVIDERS.USE_CASES),
  ],
})
export class AgentModule {}
