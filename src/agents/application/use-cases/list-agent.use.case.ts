/* eslint-disable @typescript-eslint/no-namespace */
import { UseCase as DefaultUseCase } from '../../../common';
import { AgentRepository } from '../../domain';
import { AgentOutputMapper, AgentOutput } from '../dto/agent.output';

export namespace ListAgentsUseCase {
  export class UseCase implements DefaultUseCase<void, Output> {
    constructor(private agentRepo: AgentRepository.Repository) {}

    async execute(): Promise<Output> {
      const agents = await this.agentRepo.findAll();
      return agents.map((agent) => {
        return AgentOutputMapper.toOutput(agent);
      });
    }
  }

  export type Output = AgentOutput[];
}

export default ListAgentsUseCase;
