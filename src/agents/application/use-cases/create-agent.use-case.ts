/* eslint-disable @typescript-eslint/no-namespace */
import { UseCase as DefaultUseCase } from '../../../common';
import { Agent, AgentRepository, HANDLE_MODE } from '../../domain';
import { AgentOutputMapper } from '../dto/agent.output';

export namespace CreateAgentUseCase {
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private agentRepository: AgentRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      const entity = new Agent(input);
      await this.agentRepository.create(entity);
      return AgentOutputMapper.toOutput(entity);
    }
  }

  export type Input = {
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

  export type Output = any;
}
export default CreateAgentUseCase;
