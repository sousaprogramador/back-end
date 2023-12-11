/* eslint-disable @typescript-eslint/no-namespace */
import { UseCase as DefaultUseCase } from '../../../common';
import { AgentRepository, HANDLE_MODE } from '../../domain';
import { AgentOutputMapper, AgentOutput } from '../dto/agent.output';

export namespace UpdateAgentUseCase {
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private agenteRepo: AgentRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      const entity = await this.agenteRepo.findById(input.id);

      entity.update(input);

      await this.agenteRepo.update(entity);

      return AgentOutputMapper.toOutput(entity);
    }
  }

  export type Input = {
    id: string;
    name: string;
    login: string;
    medias?: {
      voice: {
        min: number;
        max: number;
        selected: number;
        handleMode: HANDLE_MODE;
        device: string;
        devicePassword: string;
      };
      email?: {
        min: number;
        max: number;
        selected: number;
      };
      chat?: {
        min: number;
        max: number;
        selected: number;
        handleMode: HANDLE_MODE;
      };
    };
    password: string;
  };

  export type Output = AgentOutput;
}

export default UpdateAgentUseCase;
