import { Agent, HANDLE_MODE } from '../../domain';
import { AgentOutputMapper } from './agent.output';

describe('AgentOutputMapper Unit Tests', () => {
  it('should convert a aegnt in output', () => {
    const entity = new Agent({
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
    const spyToJSON = jest.spyOn(entity, 'toJSON');
    const output = AgentOutputMapper.toOutput(entity);
    expect(spyToJSON).toHaveBeenCalled();
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
