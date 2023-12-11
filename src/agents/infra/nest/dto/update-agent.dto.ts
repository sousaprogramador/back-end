import { UpdateAgentUseCase } from 'src/agents/application';
import { CreateAgentDto } from './create-agent.dto';

export class UpdateAgentDto
  extends CreateAgentDto
  implements Omit<UpdateAgentUseCase.Input, 'id'> {}
