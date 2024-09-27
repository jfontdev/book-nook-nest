import { IsMongoId } from 'class-validator';

export class FindOneCategoryDTO {
  @IsMongoId()
  id: string;
}
