
import { Book } from "../models/Book";
import { BookItem } from "../models/BookItem";
import { JsonStorageProvider } from "./JsonStorageProvider";

export class GenerateBookItems {
    
    public static generateItemsForBooks(books: Book[]): void {
        let arrBookItem : BookItem[] =[];
        for (const book of books) {
            for (let i = 1; i <= 3; i++) {
                const itemId = `${book.id}-${i}`;
                const item = new BookItem(
                    itemId,
                    book.id,
                    true
                );
                arrBookItem.push(item);
            }
        }
        JsonStorageProvider.writeToFile<BookItem>("BooksItem.json",arrBookItem);
        
    }
}
