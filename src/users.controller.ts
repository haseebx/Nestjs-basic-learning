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
} from '@nestjs/common';
import { Request, Response } from 'express'; //use for type

interface VideoParams {
  id: number;
  name: string;
}
interface QueryParams {
  name: string;
  age: number;
}

@Controller('/users')
export class UsersController {
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
}
