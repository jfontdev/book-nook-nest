import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../schemas/Book/book.schema';
import { Model } from 'mongoose';
import { CreateBookDTO } from './dto/create-book.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async createBook(createBookDto: CreateBookDTO): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAllBooks(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOneBook(bookId: string): Promise<Book | null> {
    return this.bookModel.findOne({ _id: bookId });
  }
}
