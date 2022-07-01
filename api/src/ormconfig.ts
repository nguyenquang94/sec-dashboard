import type { ConnectionOptions } from 'typeorm';
import { ChartEntity } from './modules/pubsub/entities/chart.entity';

export const typeORMConfig: ConnectionOptions = {
    type: 'postgres',
    port: parseInt(process.env.DATABASE_PORT || '5432', 10),
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: process.env.DATABASE_SYNC === 'true',
    entities: [ChartEntity],
    logging: process.env.DATABASE_LOGGING === 'true',
};
