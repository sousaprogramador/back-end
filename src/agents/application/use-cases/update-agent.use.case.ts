/* eslint-disable @typescript-eslint/no-namespace */
import { UseCase as DefaultUseCase } from '../../../common';
import { AgentRepository } from '../../domain';
import { AgentOutputMapper, AgentOutput } from '../dto/agent.output';

export namespace UpdateAccountantUseCase {
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private agenteRepo: AgentRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      const entity = await this.agenteRepo.findById(input.id);

      //entity.update(input);

      const result = await this.agenteRepo.update(entity);
      if (result) return result;

      return AgentOutputMapper.toOutput(entity);
    }
  }

  export type Input = {
    name: string;
    cpf?: string;
    cnpj?: string;
    phone?: string;
    id: string;
    isActive: boolean;
    cellPhone: string;
  };

  export type Output = AgentOutput | string;
}

export default UpdateAccountantUseCase;
