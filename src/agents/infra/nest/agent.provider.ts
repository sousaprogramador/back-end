/* eslint-disable @typescript-eslint/no-namespace */
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateAgentUseCase,
  GetAgentUseCase,
  ListAgentsUseCase,
  DeleteAgentUseCase,
  UpdateAgentUseCase,
} from '../../application';
import { AgentRepository } from '../../domain';
import {
  Agent,
  AgentDocument,
  AgentRepositoryRepository as AgentSequelizeRepository,
} from '../db';

export namespace AGENT_PROVIDERS {
  export namespace REPOSITORIES {
    export const AGENT_SEQUELIZE_REPOSITORY = {
      provide: 'AgentSequelizeRepository',
      useFactory: (agentModel: typeof Model<AgentDocument>) => {
        return new AgentSequelizeRepository(agentModel);
      },
      inject: [getModelToken(Agent.name)],
    };

    export const AGENT_REPOSITORY = {
      provide: 'AgentSequelizeRepository',
      useExisting: 'AgentSequelizeRepository',
    };
  }

  export namespace USE_CASES {
    export const CREATE_AGENT_USE_CASE = {
      provide: CreateAgentUseCase.UseCase,
      useFactory: (agentRepo: AgentRepository.Repository) => {
        return new CreateAgentUseCase.UseCase(agentRepo);
      },
      inject: [REPOSITORIES.AGENT_REPOSITORY.provide],
    };

    export const UPDATE_AGENT_USE_CASE = {
      provide: UpdateAgentUseCase.UseCase,
      useFactory: (agentRepo: AgentRepository.Repository) => {
        return new UpdateAgentUseCase.UseCase(agentRepo);
      },
      inject: [REPOSITORIES.AGENT_REPOSITORY.provide],
    };

    export const GET_AGENT_USE_CASE = {
      provide: GetAgentUseCase.UseCase,
      useFactory: (agentRepo: AgentRepository.Repository) => {
        return new GetAgentUseCase.UseCase(agentRepo);
      },
      inject: [REPOSITORIES.AGENT_REPOSITORY.provide],
    };

    export const LIST_AGENT_USE_CASE = {
      provide: ListAgentsUseCase.UseCase,
      useFactory: (agentRepo: AgentRepository.Repository) => {
        return new ListAgentsUseCase.UseCase(agentRepo);
      },
      inject: [REPOSITORIES.AGENT_REPOSITORY.provide],
    };

    export const DELETE_AGENT_USE_CASE = {
      provide: DeleteAgentUseCase.UseCase,
      useFactory: (agentRepo: AgentRepository.Repository) => {
        return new DeleteAgentUseCase.UseCase(agentRepo);
      },
      inject: [REPOSITORIES.AGENT_REPOSITORY.provide],
    };
  }
}
