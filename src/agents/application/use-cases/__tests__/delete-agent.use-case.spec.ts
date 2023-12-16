import DeleteAgentUseCase from '../delete-agent.use-case';
import { AgentInMemoryRepositoryRepository } from '../../../infra/db';
import { Agent, HANDLE_MODE } from '../../../domain';

describe('DeleteAgentUseCase Unit Tests', () => {
  let useCase: DeleteAgentUseCase.UseCase;
  let repository: AgentInMemoryRepositoryRepository;

  beforeEach(() => {
    repository = new AgentInMemoryRepositoryRepository();
    useCase = new DeleteAgentUseCase.UseCase(repository);
  });

  it('should delete a agent', async () => {
    const items = [
      new Agent({
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
      }),
    ];
    repository.items = items;
    await useCase.execute({
      id: items[0].id,
    });
    expect(repository.items).toHaveLength(0);
  });
});
