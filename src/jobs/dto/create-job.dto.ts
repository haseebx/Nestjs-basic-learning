import { JobType } from './jobType-enum';
import { LoctionDto } from './location.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsNumber,
  IsInt,
  IsIn,
  IsBoolean,
  ArrayMinSize,
  ValidateNested,
  IsObject,
} from 'class-validator';

export class CreateJobDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsIn(Object.keys(JobType))
  @IsOptional()
  type?: JobType;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  experience: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  salary: number;

  @ApiProperty()
  @ArrayMinSize(1)
  @IsString({ each: true })
  tags?: string[];

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty()
  @ValidateNested()
  @IsObject()
  @Type(() => LoctionDto)
  location: LoctionDto;
}
