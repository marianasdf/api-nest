import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YModule } from './y/y.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [YModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
