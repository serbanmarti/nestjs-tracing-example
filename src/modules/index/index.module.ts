import { IndexController } from './index.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [IndexController],
})
export class IndexModule {}
