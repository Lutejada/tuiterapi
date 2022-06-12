import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TuiterController } from './tuiter/tuiter.controller';

@Module({
  imports: [],
  controllers: [AppController, TuiterController],
  providers: [AppService],
})
export class AppModule {}
