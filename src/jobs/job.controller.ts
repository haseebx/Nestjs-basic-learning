import { Body, Controller, OnModuleInit, Post, ValidationPipe } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JobResponseDto } from './dto/job-response.dto';
@ApiTags('Jobs')
@Controller('/job')
export class JobController implements OnModuleInit {
  constructor(private readonly jobService: JobService) {}

  onModuleInit() {
    console.log("Job service Module");
    
  }
  @Post('create')
  @ApiOkResponse({ type: JobResponseDto })
  //   @UsePipes(ValidationPipe)
  async createJob(
    @Body(ValidationPipe) createJob: CreateJobDto,
  ): Promise<CreateJobDto> {
    return this.jobService.createJob(createJob);
  }
}
