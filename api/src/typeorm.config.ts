import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const pgConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ['./dist/infrastructure/storage/**/*.model.*'],
  synchronize: false,
  migrations: ['./dist/migration/*.js'],
  cli: {
    migrationsDir: 'migration',
  },
};

export default pgConfig;