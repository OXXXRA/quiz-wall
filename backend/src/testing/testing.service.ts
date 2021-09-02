import { updateTestDto } from './dto/updateTesing';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestDto } from './dto/createTesting';
import Test from './testing.entity';

@Injectable()
export class TestingService {
  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>,
  ) {}

  getAllTest() {
    return this.testRepository.find();
  }

  async getTestById(id: number) {
    const test = await this.testRepository.findOne(id);
    if (test) return test;
    throw new HttpException('test not found', HttpStatus.NOT_FOUND);
  }
  async createTest(test: CreateTestDto) {
    const newTest = await this.testRepository.create(test);
    await this.testRepository.save(newTest);
    return newTest;
  }

  async updateTest(id: number, test: updateTestDto) {
    await this.testRepository.update(id, test)
    const updatedTest = await this.testRepository.findOne(id);
    if (updatedTest) return updatedTest;
    
    throw new HttpException('Test not found', HttpStatus.NOT_FOUND);
  }

  async deleteTest(id: number) {
    const deleteResponse = await this.testRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }
}

export default TestingService;
