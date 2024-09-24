import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBookDTO {
  @IsNotEmpty()
  cover: string;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  author: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
