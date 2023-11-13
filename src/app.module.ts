import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserStore } from './store/users.store';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ClientModule],
  controllers: [UsersController],
  // providers: [{ provide: UserStore, useClass: UserStore }], 1at Method to do dependancy Injection
  providers: [
    //Inject a class in loc container
    UserStore,
    //Inject a variable in loc container
    { provide: 'DATABASE_NAME', useValue: 'Mongoo_is_me' },
    {
      provide: 'ENV_CONFIG',
      useValue: {
        type: 'Dev',
        node: '21.0.2',
      },
    }, //injection by value or arrau any thing you like
  ], //2nd method to do dependancy Injection
})
export class AppModule {}
