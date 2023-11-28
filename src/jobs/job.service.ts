import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobService {
  async createJob(body: CreateJobDto): Promise<CreateJobDto> {
    console.log('body', body);
    try {
      if (!body || Object.keys(body).length === 0) {
        throw new HttpException('Body is Empty', HttpStatus.NO_CONTENT);
      }
      return body;
    } catch (err) {
      console.log(err);
    }
  }
}
