import { updateTestDto } from './dto/updateTesing';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTestDto } from './dto/createTesting';
import TestingService from './testing.service';

@Controller('testing')
export class TestingController {
  constructor(private readonly TestingService: TestingService) {}

  @Get()
  getAllTest() {
    return this.TestingService.getAllTest();
  }

  @Get()
  getTestById(@Param('id') id: string) {
    return this.TestingService.getTestById(Number(id));
  }

  @Post()
  async createTest(@Body() test: CreateTestDto) {
    return this.TestingService.createTest(test);
  }

  @Delete(':id')
  async deleteTest(@Param('id') id: string) {
    return this.TestingService.deleteTest(Number(id));
  }

  @Patch(':id')
  async updateTest(@Param('id') id: string, @Body() test: updateTestDto) {
    return this.TestingService.updateTest(Number(id), test);
  }
}

export default TestingController;