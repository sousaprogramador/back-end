import { AgentOutput } from '../../application/dto/agent.output';

export class AgentPresenter {
  name: string;
  login: string;
  medias?: {
    voice: {
      min: number;
      max: number;
      selected: number;
      handleMode: string;
      device: string;
      devicePassword: string;
    };
    email?: {
      min: number;
      max: number;
      selected: number;
    };
    chat?: {
      min: number;
      max: number;
      selected: number;
      handleMode: string;
    };
  };
  password: string;

  constructor(output: AgentOutput) {
    this.name = output.name;
    this.login = output.login;
    this.medias = output.medias;
    this.password = output.password;
  }
}

export class AgentPresenterCollectionPresenter {
  data: AgentPresenter[];
}
