import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { PostsModule } from './posts/posts.module';
import { QuizModule } from './quiz/quiz.module';
import { UsersModule } from './users/users.module';
import { TestingModule } from './testing/testing.module';
@Module({
  imports: [PostsModule, ConfigModule.forRoot(), DatabaseModule,
    UsersModule, AuthModule, QuizModule, TestingModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
