import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const resolvePort = (): number => parseInt(process.env.DB_PORT ?? '3306', 10);

const resolveEntities = (): string[] => [
  __dirname + '/../**/*.entity{.ts,.js}',
];

const resolveMigrations = (): string[] => [
  __dirname + '/../migrations/**/*{.ts,.js}',
];

export const databaseConfig = (): TypeOrmModuleOptions => ({
  type: 'mariadb',
  host: process.env.DB_HOST ?? 'localhost',
  port: resolvePort(),
  username: process.env.DB_USERNAME ?? 'root',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME ?? 'gravity',
  entities: resolveEntities(),
  migrations: resolveMigrations(),
  synchronize: process.env.NODE_ENV !== 'production',
});
