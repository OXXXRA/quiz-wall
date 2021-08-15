
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => {

      mongoose.set('toJSON', {
        virtuals: true,
        transform: (_, converted) => {
          delete converted._id;
          delete converted.__v;
        }
      });

      return mongoose.connect('mongodb://localhost/nest', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
      })

    }

  },
];