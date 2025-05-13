import { GenerateBooks } from "../datas/GenerateBooks";
import { JsonStorageProvider } from "../datas/JsonStorageProvider";
import { KindBooks } from "../enums/KindBooks";
import { IBook } from "../interfaces/IBook";
import { Book } from "../models/Book";
import { BookItem } from "../models/BookItem";

export class BookService {
    private books:Book[] = [];
    private bookItems:BookItem[] = [];

    constructor(){
        GenerateBooks.generateBook(10);
        const rawBook = JsonStorageProvider.readFromFile<IBook>("Books.json");
        this.books = rawBook.map(data => new Book(data.id,data.title,data.author,data.kind));
        const rawBookItem = JsonStorageProvider.readFromFile<BookItem>("BooksItem.json");
        this.bookItems = rawBookItem.map(data => new BookItem(data.id,data.idBook,data.available))
    }

    createBook(book: { id: string, title: string, author: string ,kind:KindBooks[]}): Book {
        const newBook = new Book(book.id, book.title, book.author,book.kind)
        this.books.push(newBook);
        JsonStorageProvider.writeToFile<Book>("Books.json",this.books);
        return newBook;
    }
    getBook(id: string): Book {
        return this.books.filter(book => book.id === id)[0];
    }
    getAllBook(): Book[] {
        return this.books;
    }
    updateBook(id: string, data: { title: string, author: string }): boolean {
        const book = this.books.find(b => b.id === id);
        if (book) {
            if (data.title) { book?.setTitle(data.title) };
            if (data.author) { book?.setAuthor(data.author) }
        } else {
            return false;
        }
        JsonStorageProvider.writeToFile<Book>("Books.json",this.books);

        return true;
    }

    getBookItems(idBook:string){
        return this.bookItems.filter(item => item.getIdBook() === idBook);
    }
}