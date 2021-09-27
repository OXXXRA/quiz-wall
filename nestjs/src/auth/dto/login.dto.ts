import { IsEmail, IsOptional, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @MinLength(6)
  password?: string;
}
