import { IsOptional, Length } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  avatar: string;

  @IsOptional()
  @Length(3, 20)
  nickname: string;
}
