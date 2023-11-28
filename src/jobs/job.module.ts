import { Module, OnModuleInit } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';

@Module({
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule implements OnModuleInit {
  onModuleInit() {
    console.log('jobs module init');
  }
}
