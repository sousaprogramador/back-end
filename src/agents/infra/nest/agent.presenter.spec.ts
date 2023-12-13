import { HANDLE_MODE } from '../../domain';
import { AgentPresenter } from './agent.presenter';

describe('AgentPresenter Unit Tests', () => {
  describe('constructor', () => {
    it('should set values', () => {
      const presenter = new AgentPresenter({
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

      expect(presenter.name).toBe('Jhon Due');
      expect(presenter.password).toBe('secret');
      expect(presenter.login).toBe('jhons');
      expect(presenter.medias.voice).toBeDefined();
    });
  });
});
