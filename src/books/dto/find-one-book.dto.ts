import { IsMongoId } from 'class-validator';

export class FindOneBookDTO {
  @IsMongoId()
  id: string;
}
