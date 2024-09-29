import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DataService } from './data.service';

@Controller()
@ApiTags('Data')
export class DataController {
  constructor(private readonly service: DataService) {}

  @Get()
  async getData() {
    return this.service.getData();
  }
}
