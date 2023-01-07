import * as winston from 'winston';
import * as WinstonDaily from 'winston-daily-rotate-file';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';

export const winstonConfig = {
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonModuleUtilities.format.nestLike(),
      ),
    }),
    new WinstonDaily({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonModuleUtilities.format.nestLike(),
      ),
      level: 'debug',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      filename: 'custom-logs-all/%DATE%.log',
      maxSize: '20m',
      maxFiles: '28d',
    }),
  ],
};
