
import { Book } from "../models/Book";
import { BookItem } from "../models/BookItem";

export class GenerateBookItems {
    
    public generateItemsForBooks(books: Book[]): BookItem[] {
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
        return arrBookItem;
    }
}
