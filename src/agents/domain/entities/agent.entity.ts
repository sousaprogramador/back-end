export enum HANDLE_MODE {
  AUTO = 'AUTO',
}

export type AgentProperties = {
  name: string;
  login: string;
  medias?: {
    voice: {
      min: number;
      max: number;
      selected: number;
      handleMode: HANDLE_MODE;
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
      handleMode: HANDLE_MODE;
    };
  };
  password: string;
};

export class Agent {
  constructor(public readonly props: AgentProperties) {}

  toJSON(): AgentProperties {
    return { ...(this.props as AgentProperties) };
  }
}
