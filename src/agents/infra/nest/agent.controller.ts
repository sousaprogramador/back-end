import {
  Controller,
  Post,
  Body,
  Get,
  Injectable,
  Param,
  HttpCode,
  Delete,
  Put,
} from '@nestjs/common';
import {
  CreateAgentUseCase,
  GetAgentUseCase,
  ListAgentsUseCase,
  DeleteAgentUseCase,
  UpdateAgentUseCase,
} from '../../application';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { AgentPresenter } from './agent.presenter';
import { AgentOutput } from '../../application/dto/agent.output';

@Controller('public/agent')
@Injectable()
export class AgentController {
  constructor(
    private readonly listUseCase: ListAgentsUseCase.UseCase,
    private readonly getUseCase: GetAgentUseCase.UseCase,
    private readonly createUseCase: CreateAgentUseCase.UseCase,
    private readonly deleteUseCase: DeleteAgentUseCase.UseCase,
    private readonly updateUseCase: UpdateAgentUseCase.UseCase,
  ) {}

  @Get()
  async get() {
    const output = await this.listUseCase.execute();
    return output;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const output = await this.getUseCase.execute({ id });
    return AgentController.AgentPresenterToResponse(output);
  }

  @Post()
  async create(@Body() createAgentDto: CreateAgentDto) {
    const output = await this.createUseCase.execute(createAgentDto);
    return AgentController.AgentPresenterToResponse(output);
  }

  @Put(':id') //PUT vs PATCH
  async update(
    @Param('id') id: string,
    @Body() updateAgentDto: UpdateAgentDto,
  ) {
    const output = await this.updateUseCase.execute({
      id,
      ...updateAgentDto,
    });
    return AgentController.AgentPresenterToResponse(output);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteUseCase.execute({ id });
  }

  static AgentPresenterToResponse(output: AgentOutput) {
    return new AgentPresenter(output);
  }
}
