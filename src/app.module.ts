import { ConfigModule } from '@nestjs/config';
import { DataModule } from './modules/data/data.module';
import { HealthModule } from './modules/health/health.module';
import { IndexModule } from './modules/index/index.module';
import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    IndexModule,
    HealthModule,
    DataModule,
    RouterModule.register([
      {
        path: '/',
        module: IndexModule,
      },
      {
        path: '/health',
        module: HealthModule,
      },
      {
        path: '/data',
        module: DataModule,
      },
    ]),
  ],
})
export class AppModule {}
