import { GenerateBookItems } from "../datas/GenerateBookItems";
import { GenerateBooks } from "../datas/generateBooks";
import { Book } from "../models/Book";
import { BookItem } from "../models/BookItem";

export class BookItemService {
    private books: Book[];
    private bookItems: BookItem[];
    constructor() {
        const generatorBook = new GenerateBooks;
        const generateBookItem = new GenerateBookItems;
        this.books = generatorBook.generateBook(10);
        this.bookItems = generateBookItem.generateItemsForBooks(this.books);
    }

    createBookItem(data:{id:string,idBook:string,available:boolean}) : BookItem{
        const bookItem = new BookItem(data.id,data.idBook,data.available);
        return  bookItem;

    }
    returnBookItem(idBookItem:string){
        const bookItem = this.bookItems.find(item => item.getId() === idBookItem);
        if(bookItem){
            bookItem.setAvailable(true);
            return true;
        }
        return false;
    }
    

}