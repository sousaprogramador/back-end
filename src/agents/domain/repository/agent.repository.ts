/* eslint-disable @typescript-eslint/no-namespace */
import { Agent } from '../entities';

export interface AgentRepositoryInterface {
  findAll: () => Promise<Agent[]>;
  findById: (companyId: string) => Promise<Agent>;
  create: (entity: Agent) => Promise<void>;
  update: (data: Agent) => Promise<void | string>;
  delete: (id: string) => Promise<void>;
}

export namespace AgentRepository {
  export type Repository = AgentRepositoryInterface;
}

export default AgentRepository;
