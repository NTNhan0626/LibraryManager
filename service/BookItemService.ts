import { LibraryDataProvider } from "../datas/LibraryDataProvider";
import { BookItem } from "../models/BookItem";

export class BookItemService {
    private books = LibraryDataProvider.getBooks();
    private bookItems = LibraryDataProvider.getBookItems();

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