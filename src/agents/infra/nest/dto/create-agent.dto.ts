import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString } from 'class-validator';
import { CreateAgentUseCase } from '../../../application';
import { HANDLE_MODE } from '../../../domain';

export class CreateAgentDto implements CreateAgentUseCase.Input {
  @IsString()
  @ApiProperty({
    type: 'string',
    example: 'Paul Due',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    example: 'Paul Due',
  })
  @IsString()
  login: string;

  @IsObject()
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
  @IsString()
  password: string;
}
