import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobService {
  async createJob(body: CreateJobDto): Promise<CreateJobDto> {
    console.log('body', body);
    try {
      return body;
    } catch (err) {
      console.log(err);
    }
  }
}
