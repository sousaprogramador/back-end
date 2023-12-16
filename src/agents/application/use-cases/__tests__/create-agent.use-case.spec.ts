import CreateAgentUseCase from '../create-agent.use-case';
import { AgentInMemoryRepositoryRepository } from '../../../infra/db';
import { HANDLE_MODE } from '../../../domain';

describe('CreateAgentUseCase Unit Tests', () => {
  let useCase: CreateAgentUseCase.UseCase;
  let repository: AgentInMemoryRepositoryRepository;

  beforeEach(() => {
    repository = new AgentInMemoryRepositoryRepository();
    useCase = new CreateAgentUseCase.UseCase(repository);
  });

  it('should create a agent', async () => {
    const spyInsert = jest.spyOn(repository, 'create');

    const data = {
      name: 'Jhon Due',
      login: 'jhons',
      medias: {
        voice: {
          min: 1,
          max: 100,
          selected: 0,
          handleMode: HANDLE_MODE.AUTO,
          device: 'SANSUNG',
          devicePassword: 'secret',
        },
        email: {
          min: 1,
          max: 1,
          selected: 1,
        },
        chat: {
          min: 1,
          max: 1,
          selected: 1,
          handleMode: HANDLE_MODE.AUTO,
        },
      },
      password: 'secret',
    };
    const output = await useCase.execute(data);
    expect(spyInsert).toHaveBeenCalledTimes(1);
    expect(output).toStrictEqual(data);
  });
});
