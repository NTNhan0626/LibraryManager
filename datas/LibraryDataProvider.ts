
import { GenerateBookItems } from "../datas/GenerateBookItems";
import { Book } from "../models/Book";
import { BookItem } from "../models/BookItem";
import { GenerateBooks } from "./GenerateBooks";

export class LibraryDataProvider {
    private static books: Book[];
    private static bookItems: BookItem[];

    static init(): void {
        if (!this.books || !this.bookItems) {
            const generatorBook = new GenerateBooks();
            const generatorBookItem = new GenerateBookItems();
            this.books = generatorBook.generateBook(10);
            this.bookItems = generatorBookItem.generateItemsForBooks(this.books);
        }
    }

    static getBooks(): Book[] {
        this.init();
        return this.books;
    }

    static getBookItems(): BookItem[] {
        this.init();
        return this.bookItems;
    }
}
