import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const config = new DocumentBuilder()
  //   .setTitle('quiz-wall')
  //   .setDescription('The best of you')
  //   .setVersion('0.0.1')
  //   .build()

  // const document = SwaggerModule.createDocument(app, config);

  // SwaggerModule.setup('/app/docs', app, document);

  await app.listen(3004);

}

bootstrap();
