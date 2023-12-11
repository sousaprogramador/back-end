/* eslint-disable @typescript-eslint/no-namespace */
import { UseCase as DefaultUseCase } from '../../../common';
import { AgentRepository } from '../../domain';
import { AgentOutputMapper, AgentOutput } from '../dto/agent.output';

export namespace GetAgentUseCase {
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private agentRepo: AgentRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      const entity = await this.agentRepo.findById(input.id);
      return AgentOutputMapper.toOutput(entity);
    }
  }

  export type Input = {
    id: string;
  };

  export type Output = AgentOutput;
}

export default GetAgentUseCase;
