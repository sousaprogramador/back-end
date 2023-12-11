import { Model } from 'mongoose';
import { Agent } from '../../../domain';
import { AgentRepository as AgentRepositoryRepositoryContract } from '../../../domain';
import { AgentDocument } from './agent.model';

export class AgentRepositoryRepository
  implements AgentRepositoryRepositoryContract.Repository
{
  constructor(private agentRepository: typeof Model<AgentDocument>) {}

  async findAll(): Promise<Agent[]> {
    return this.agentRepository.find();
  }

  async findById(id: string): Promise<Agent> {
    try {
      return await this.agentRepository.findOne({ _id: id });
    } catch {}
  }

  async create(entity: Agent): Promise<void> {
    const agent = await this.agentRepository.create(entity.toJSON());
    await agent.save();
  }

  async update(entity: Agent): Promise<void> {
    const agent = await this.agentRepository.create(entity.toJSON());
    await agent.save();
  }

  async delete(id: string): Promise<void> {
    try {
      await this.agentRepository.deleteOne({ _id: id });
    } catch {}
  }
}
