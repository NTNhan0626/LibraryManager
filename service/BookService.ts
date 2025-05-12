import { LibraryDataProvider } from "../datas/LibraryDataProvider";
import { Book } from "../models/Book";
import { BookItem } from "../models/BookItem";

export class BookService {
    private books:Book[] = LibraryDataProvider.getBooks();
    private bookItems:BookItem[] = LibraryDataProvider.getBookItems();

    createBook(book: { id: string, title: string, author: string }): Book {
        const newBook = new Book(book.id, book.title, book.author)
        this.books.push(newBook);
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

        return true;
    }

    getBookItems(idBook:string){
        return this.bookItems.filter(item => item.getIdBook() === idBook);
    }
}