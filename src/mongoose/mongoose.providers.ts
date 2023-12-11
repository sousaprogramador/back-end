import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from '../common/env';

export const mongooseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () => mongoose.createConnection(DATABASE_CONNECTION),
  },
];
