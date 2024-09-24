import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBookDTO } from './dto/createBook.dto';
import { BooksService } from './books.service';
import { FindOneBookDTO } from './dto/findOneBook.dto';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDTO) {
    this.bookService.createBook(createBookDto);
  }

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params: FindOneBookDTO) {
    return this.bookService.findOne(params.id);
  }
}
