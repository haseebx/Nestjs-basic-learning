import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ClientController } from './client/client.controller';

@Module({
  controllers: [UsersController, ClientController],
})
export class AppModule {}
