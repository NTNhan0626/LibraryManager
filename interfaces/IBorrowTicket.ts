export interface IBorrowTicket {
    id: string;
    userId: string;
    bookItemId: string;
    borrowDate: Date;
    dueDate: Date;
    returnDate?: Date | null;
    isReturned?: boolean;
}
