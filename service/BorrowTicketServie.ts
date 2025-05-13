import { IBorrowTicket } from "../interfaces/IBorrowTicket";
import { BorrowTicket } from "../models/BorrowTicket";
import { BookItemService } from "./BookItemService";

export class BorrowTicketService{
    private arrBorrowTicket: BorrowTicket[] =[];
    private bookItemService = new BookItemService;
    createBorrowTicket(data:Required<IBorrowTicket>){
        const borrowTicket = new BorrowTicket(data.id,data.userId,data.bookItemId,data.borrowDate,data.dueDate,data.returnDate,data.isReturned);
        
        if(borrowTicket) {this.arrBorrowTicket.push(borrowTicket)};
        return borrowTicket;

    }
    returnBorrowTicket(id:string){
        const borrowTicket =  this.arrBorrowTicket.find(bt=>bt.id === id);
        if(borrowTicket){
            borrowTicket.isReturned = true;
            this.bookItemService.returnBookItem(borrowTicket.bookItemId);
        }
    }
    getAllBorrowTicket() : BorrowTicket[]{
        return this.arrBorrowTicket;
    }
    getBorrowTicketById(id: string): BorrowTicket {
        const borrowTicket = this.arrBorrowTicket.find(bt => bt.id === id);
        if (!borrowTicket) {
            throw new Error(`BorrowTicket with id '${id}' not found`);
        }
        return borrowTicket;
    }
    getBorrowTicketByUserId(userId:string):BorrowTicket[]{
        return this.arrBorrowTicket.filter(bt => bt.userId === userId);
    }
    

}