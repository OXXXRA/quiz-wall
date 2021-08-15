
import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { QuizController } from "./quiz.controller";
import { Quiz, QuizSchema } from "./quiz.schema";
import { QuizService } from './quiz.service';

@Module({
  imports: [

    MongooseModule.forFeature([{ name: Quiz.name, schema: QuizSchema }])
  ],
  controllers: [QuizController],
  providers: [
    QuizService,
  ],
})
export class QuizModule { }
