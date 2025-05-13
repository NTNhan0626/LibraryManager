import { GenerateBookItems } from "../datas/GenerateBookItems";
import { GenerateBooks } from "../datas/GenerateBooks";
import { JsonStorageProvider } from "../datas/JsonStorageProvider";
import { BookItem } from "../models/BookItem";
import { BookService } from "./BookService";

export class BookItemService {
    private bookItems:BookItem[] = [];
    private booksService = new BookService();

    constructor(){
        
        GenerateBookItems.generateItemsForBooks(this.booksService.getAllBook());
        const rawBookItem = JsonStorageProvider.readFromFile<BookItem>("BooksItem.json");
        this.bookItems = rawBookItem.map(data => new BookItem(data.id,data.idBook,data.available));
    }

    createBookItem(data:{id:string,idBook:string,available:boolean}) : BookItem{
        const bookItem = new BookItem(data.id,data.idBook,data.available);
        this.bookItems.push(bookItem);
        JsonStorageProvider.writeToFile<BookItem>("BooksItem.json",this.bookItems);
        return  bookItem;

    }
    borrowBookItem(idBookItem:string){
        const bookItem = this.bookItems.find(item => item.getId() === idBookItem);
        if(bookItem){
            bookItem.setAvailable(false);
            JsonStorageProvider.writeToFile<BookItem>("BooksItem.json",this.bookItems);
            return true;
        }
        return false;
    }
    returnBookItem(idBookItem:string){
        const bookItem = this.bookItems.find(item => item.getId() === idBookItem);
        if(bookItem){
            bookItem.setAvailable(true);
            JsonStorageProvider.writeToFile<BookItem>("BooksItem.json",this.bookItems);
            return true;
        }
        return false;
    }
}