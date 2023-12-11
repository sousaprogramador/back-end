import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Transform } from 'class-transformer';

export type AgentDocument = Agent & Document;

@Schema()
export class Agent {
  @Transform(({ obj }) => obj._id.toString(), { toClassOnly: true })
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  login: string;

  @Prop({ type: Object })
  medias: {
    voice: {
      min: number;
      max: number;
      selected: number;
      handleMode: string;
      device: string;
      devicePassword: string;
    };
    email: {
      min: number;
      max: number;
      selected: number;
    };
    chat: {
      min: number;
      max: number;
      selected: number;
      handleMode: string;
    };
  };

  @Prop()
  password: string;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);
