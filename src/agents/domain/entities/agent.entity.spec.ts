import { Agent, HANDLE_MODE } from './agent.entity';

describe('Agent Unit Tests', () => {
  test('constructor of agent', () => {
    const agent = new Agent({
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

    expect(agent.props).toStrictEqual({
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

  test('getter and setter of name prop', () => {
    const agent = new Agent({
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
    expect(agent.name).toBe('Jhon Due');

    agent['name'] = 'Paul Due';
    expect(agent.name).toBe('Paul Due');
  });
});
