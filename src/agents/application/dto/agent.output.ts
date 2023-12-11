import { Agent, HANDLE_MODE } from '../../domain';

export type AgentOutput = {
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

export class AgentOutputMapper {
  static toOutput(entity: Agent): AgentOutput {
    return entity?.toJSON();
  }
}
