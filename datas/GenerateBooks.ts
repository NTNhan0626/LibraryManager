import { KindBooks } from "../enums/KindBooks";
import { Book } from "../models/Book";
import { JsonStorageProvider } from "./JsonStorageProvider";

export class GenerateBooks {
    static generateBook(num: number): void {
        let arrBook: Book[] = [];
        const book1 = new Book("1", "Harry Potter", "J.K. Rowling",[KindBooks.Novel]);
        const book2 = new Book("2", "The Hobbit", "J.R.R. Tolkien",[KindBooks.History]);
        const book3 = new Book("3", "1984", "George Orwell",[KindBooks.History]);
        const book4 = new Book("4", "To Kill a Mockingbird", "Harper Lee",[KindBooks.Science]);
        const book5 = new Book("5", "Pride and Prejudice", "Jane Austen",[KindBooks.Novel]);
        const book6 = new Book("6", "The Catcher in the Rye", "J.D. Salinger",[KindBooks.Detective]);
        const book7 = new Book("7", "The Great Gatsby", "F. Scott Fitzgerald",[KindBooks.History]);
        const book8 = new Book("8", "The Da Vinci Code", "Dan Brown",[KindBooks.Novel]);
        const book9 = new Book("9", "The Alchemist", "Paulo Coelho",[KindBooks.Science]);
        const book10 = new Book("10", "The Lord of the Rings", "J.R.R. Tolkien",[KindBooks.Detective]);

        arrBook.push(
            book1,
            book2,
            book3,
            book4,
            book5,
            book6,
            book7,
            book8,
            book9,
            book10
        );
        JsonStorageProvider.writeToFile<Book>("Books.json",arrBook);
        
    }
}