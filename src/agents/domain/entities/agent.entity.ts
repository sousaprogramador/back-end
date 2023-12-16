export enum HANDLE_MODE {
  AUTO = 'AUTO',
}

export type AgentProperties = {
  id?: string;
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

export type AgentPropsJson = Required<{ id: string } & AgentProperties>;

export class Agent {
  constructor(public readonly props: AgentProperties) {}

  update(props: AgentProperties): void {
    this.name = props.name;
    this.login = props.login;
    this.medias = props.medias;
    this.password = props.password;
  }

  get id() {
    return this.props.id;
  }

  private set id(value) {
    this.props.id = value;
  }

  get name() {
    return this.props.name;
  }

  private set name(value) {
    this.props.name = value;
  }

  get login() {
    return this.props.login;
  }

  private set login(value) {
    this.props.login = value;
  }

  get medias() {
    return this.props.medias;
  }

  private set medias(value) {
    this.props.medias = value;
  }

  get password() {
    return this.props.password;
  }

  private set password(value) {
    this.props.password = value;
  }

  toJSON(): AgentPropsJson {
    return { ...(this.props as AgentPropsJson) };
  }
}
