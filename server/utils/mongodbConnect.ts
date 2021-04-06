import { Db, MongoClient } from 'mongodb';
import { logger } from '@utils/appLogger';

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
let db: Db;

export async function connectToDatabase(dbName: string): Promise<void> {
  try {
    await client.connect();
    db = await client.db(dbName);
    logger.db(`DB connected: ${process.env.DB_NAME}`);

    return Promise.resolve();
  } catch (error) {
    await client.close();
    logger.db(`DB error connection: ${process.env.DB_NAME}`);
    throw new Error(`Database error ${error}`);
  }
}

export const getDb = (): Db => {
  if (db) {
    return db;
  }
  throw new Error('No database found!');
};
