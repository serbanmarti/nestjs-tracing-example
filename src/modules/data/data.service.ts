import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  async getData() {
    return { data: { message: 'Hello World!' } };
  }
}
