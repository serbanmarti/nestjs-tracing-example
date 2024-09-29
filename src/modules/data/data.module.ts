import { DataController } from './data.controller';
import { DataService } from './data.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}
