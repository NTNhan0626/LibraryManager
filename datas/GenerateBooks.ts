import { Book } from "../models/Book";

export class GenerateBooks {
    generateBook(num: number): Book[] {
        let arrBook: Book[] = [];
        const book1 = new Book("1", "Harry Potter", "J.K. Rowling");
        const book2 = new Book("2", "The Hobbit", "J.R.R. Tolkien");
        const book3 = new Book("3", "1984", "George Orwell");
        const book4 = new Book("4", "To Kill a Mockingbird", "Harper Lee");
        const book5 = new Book("5", "Pride and Prejudice", "Jane Austen");
        const book6 = new Book("6", "The Catcher in the Rye", "J.D. Salinger");
        const book7 = new Book("7", "The Great Gatsby", "F. Scott Fitzgerald");
        const book8 = new Book("8", "The Da Vinci Code", "Dan Brown");
        const book9 = new Book("9", "The Alchemist", "Paulo Coelho");
        const book10 = new Book("10", "The Lord of the Rings", "J.R.R. Tolkien");

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
        return arrBook;
    }
}