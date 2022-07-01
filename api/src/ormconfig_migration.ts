require('./dotenv-config');
import type { ConnectionOptions } from 'typeorm';
import { typeORMConfig } from './ormconfig';

const typeORMConfigMigration: ConnectionOptions = {
    ...typeORMConfig,
    migrations: ['./src/migrations/*.ts'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};

export = typeORMConfigMigration;
