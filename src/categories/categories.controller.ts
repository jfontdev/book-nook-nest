import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { FindOneCategoryDTO } from './dto/find-one-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.createCategory(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAllCategories();
  }

  @Get(':id')
  async findOne(@Param() params: FindOneCategoryDTO) {
    return this.categoriesService.findOneCategory(params.id);
  }

  @Patch(':id')
  update(
    @Param() params: FindOneCategoryDTO,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.updateCategory(params.id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param() params: FindOneCategoryDTO) {
    return this.categoriesService.removeCategory(params.id);
  }
}
