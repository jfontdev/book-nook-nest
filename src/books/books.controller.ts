import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBookDTO } from './dto/create-book.dto';
import { BooksService } from './books.service';
import { FindOneBookDTO } from './dto/find-one-book.dto';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDTO) {
    this.bookService.createBook(createBookDto);
  }

  @Get()
  async findAll() {
    return this.bookService.findAllBooks();
  }

  @Get(':id')
  async findOne(@Param() params: FindOneBookDTO) {
    return this.bookService.findOneBook(params.id);
  }
}
