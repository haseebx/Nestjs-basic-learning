import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
export class LoctionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  city: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  country: string;
}
