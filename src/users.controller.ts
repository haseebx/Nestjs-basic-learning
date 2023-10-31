import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
@Controller('/users')
export class UsersController {
  @Get('/profile')
  getProfile(@Req() req: Request) {
    console.log(req.params);

    return { text: 'Hello World Haseeb!' };
  }

  @Get('/profile/promis')
  async getProfilePromise() {
    return new Promise((resolve, reject) => {
      resolve({
        text: 'Hello World Haseeb!, Promise',
      });
    });
  }


}
