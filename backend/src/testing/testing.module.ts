import Test from './testing.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TestingService } from './testing.service';
import { TestingController } from './testing.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  providers: [TestingService],
  controllers: [TestingController]
})
export class TestingModule {}
