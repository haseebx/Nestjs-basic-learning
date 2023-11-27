import { ApiProperty } from '@nestjs/swagger';
import { LoctionDto } from './location.dto';
import { JobType } from './jobType-enum';

export class JobResponseDto {
  @ApiProperty()
  companyName: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  type?: JobType;

  @ApiProperty()
  experience: number;

  @ApiProperty()
  salary: number;

  @ApiProperty()
  tags?: string[];

  @ApiProperty()
  isActive?: boolean;

  @ApiProperty()
  location: LoctionDto;

  //   constructor(job: Miscellanious) {
  //     this.id = misc.id;
  //     this.enabled = misc.enabled;
  //     this.intro = misc.intro;
  //     this.type = misc.type;
  //     this.title = misc.title;
  //     this.description = misc.description;
  //     this.image = misc.image;
  //   }
}
