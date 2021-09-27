import { Length } from 'class-validator';

export class CreatePostDto {
  @Length(5)
  name: string;

  @Length(5)
  content: string;
}
