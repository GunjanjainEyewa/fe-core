import path from 'path';
import { Response, Request, NextFunction } from 'express';
import { logger } from '@eyewa/logger';

import { statusCodes } from '@eyewa/utils/network/constants';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  let status = statusCodes.NOT_FOUND;
  if (err) {
    status = statusCodes.ERROR;
  }
  logger.error(err, _req.url);

  res.status(status).json({
    status: 'error',
    message: err.message,
    stack:
      // print a nicer stack trace by splitting line breaks and making them array items
      process.env.NODE_ENV === 'development'
      && (err.stack || '')
        .split('\n')
        .map((line: string) => line.trim())
        .map((line: string) => line.split(path.sep).join('/'))
        .map((line: string) => line.replace(
          process
            .cwd()
            .split(path.sep)
            .join('/'),
          '.',
        )),
  });
};

export default errorHandler;
