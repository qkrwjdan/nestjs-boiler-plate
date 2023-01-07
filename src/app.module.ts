import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoresModule } from './stores/stores.module';
import { WinstonModule } from 'nest-winston';
import { NestModule } from '@nestjs/common';
import { MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { mongodbFactory } from './config/mongoose.config';
import { ConfigModule } from '@nestjs/config';
import { winstonConfig } from './config/winston.config';
import { envValidationSchema } from './config/env.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: envValidationSchema,
      envFilePath: '.env',
      isGlobal: true,
    }),
    WinstonModule.forRoot(winstonConfig),
    MongooseModule.forRootAsync(mongodbFactory),
    StoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
