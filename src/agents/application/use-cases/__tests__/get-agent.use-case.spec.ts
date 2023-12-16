import GetAgentUseCase from '../get-agent.use-case';
import { AgentInMemoryRepositoryRepository } from '../../../infra/db';
import { Agent, HANDLE_MODE } from '../../../domain';

describe('GetAgentUseCase Unit Tests', () => {
  let useCase: GetAgentUseCase.UseCase;
  let repository: AgentInMemoryRepositoryRepository;

  beforeEach(() => {
    repository = new AgentInMemoryRepositoryRepository();
    useCase = new GetAgentUseCase.UseCase(repository);
  });

  it('should returns a agent', async () => {
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
    const spyFindById = jest.spyOn(repository, 'findById');
    const output = await useCase.execute({ id: items[0].id });
    expect(spyFindById).toHaveBeenCalledTimes(1);
    expect(output).toStrictEqual({
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
    });
  });
});
