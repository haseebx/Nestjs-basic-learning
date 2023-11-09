/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Req,
  HttpCode,
  HttpStatus,
  Res,
  Header,
  Param,
  Query,
  Body,
  Inject,
} from '@nestjs/common';
import { Request, Response } from 'express'; //use for type
import { ApiTags } from '@nestjs/swagger';

interface VideoParams {
  id: number;
  name: string;
}
interface QueryParams {
  name: string;
  age: number;
}
@ApiTags('User')
@Controller('/users')
export class UsersController {
  //dependancy injection value provider simple
  // constructor(@Inject('DATABASE_NAME') private dbname: string) {
  //   console.log('xxxxxxx', this.dbname);
  // }

  //Inject Object into a class
  constructor(@Inject('ENV_CONFIG') private config: Record<string, any>) {
    console.log('xxxxxxx', this.config);
  }

  @Get('/profile')
  getProfile(@Req() req: Request, @Res() res: Response) {
    console.log(req.params);
    res.status(200);
    res.json({
      text: 'Hello World Haseeb! by res',
    });
  }

  @Get('/profile/promis')
  async getProfilePromise() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, reject) => {
      resolve({
        text: 'Hello World Haseeb!, Promise',
      });
    });
  }

  @Post('/form')
  @HttpCode(HttpStatus.NO_CONTENT)
  @Header('X-name', 'Haseeb')
  postForm(@Req() req: Request, @Res({ passthrough: true }) Res: Response) {
    Res.status(200);
    return {
      res: 'recived response',
    };
  }

  @Get('/video/:id/:name')
  getVideos(@Param() params: VideoParams, @Res() res: Response) {
    console.log(params.id);
    res.status(200);
    return {
      res: 'recived response',
    };
  }

  @Get('/query')
  getQuery(@Query() query: QueryParams) {
    //getQuery(@Query('name') query: string) => get only one
    console.log(query);

    return {
      res: 'recived response',
      queryData: query,
    };
  }

  @Post('/videobody')
  addVideo(@Body() requestData: Record<string, any>, @Res() res: Response) {
    try {
      console.log(requestData);
      res.status(200).send({ success: true, bodyData: requestData });
      // return { success: true, bodyData: requestData };
    } catch (error) {
      console.error(error);
      res.status(500);
      return { err: 'bad server' };
    }
  }
}
