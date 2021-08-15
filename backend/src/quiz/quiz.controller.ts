import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';


@Controller('quiz')
export class QuizController {

  constructor(private quizService: QuizService) { }

  @Post()
  create(@Body() data: any): any {
    return this.quizService.create(data)
  }

  @Get()
  findAll(): any {
    return this.quizService.findAll()
  }
}
