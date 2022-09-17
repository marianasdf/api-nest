import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import config from '../config/configuration';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.database.host,
      port: config.database.port,
      username: config.database.username,
      password: config.database.password,
      database: config.database.database,
      entities: [config.database.entities],
      migrations: [config.database.migrations],
      synchronize: false,
      migrationsRun: false,
    }),
  ],
})
export class DatabaseModule {
  constructor(private database: DataSource) {
    this.database.isInitialized
      ? console.log('Database Connected')
      : console.error('Error on Connect to Database');
  }
}
