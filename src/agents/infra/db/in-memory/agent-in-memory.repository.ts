import {
  Agent,
  AgentRepository as AgentRepositoryRepositoryContract,
} from '../../../domain';

export class AgentInMemoryRepositoryRepository
  implements AgentRepositoryRepositoryContract.Repository
{
  items: Agent[] = [];

  async findAll(): Promise<Agent[]> {
    return this.items;
  }

  async findById(id: string): Promise<Agent> {
    const agent = this.items.find((i) => i.id === id);
    return agent;
  }

  async create(entity: Agent): Promise<void> {
    this.items.push(entity);
  }

  async update(entity: Agent): Promise<string | void> {
    const indexFound = this.items.findIndex((i) => i.id === entity.id);
    this.items[indexFound] = entity;
  }

  async delete(id: string): Promise<void> {
    const indexFound = this.items.findIndex((i) => i.id === id);
    this.items.splice(indexFound, 1);
  }
}
