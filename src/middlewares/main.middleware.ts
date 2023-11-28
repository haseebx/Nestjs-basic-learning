import { NextFunction, Request, Response } from 'express';

export function mainAgent(req: Request, res: Response, next: NextFunction) {
  const ma = req.header['main-agent'];

  console.log(ma);
  req['us'] = ma;
  next();
}
