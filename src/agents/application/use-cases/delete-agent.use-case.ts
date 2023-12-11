/* eslint-disable @typescript-eslint/no-namespace */
import { UseCase as DefaultUseCase } from '../../../common';
import { AgentRepository } from '../../domain';

export namespace DeleteAgentUseCase {
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private agentRepository: AgentRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      await this.agentRepository.delete(input.id);
    }
  }

  export type Input = {
    id: string;
  };

  type Output = void;
}

export default DeleteAgentUseCase;
