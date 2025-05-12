export class BorrowTicket{
    constructor(
        public id:string,
        public userId: string,
        public bookItemId:string,
        public borrowDate: Date,
        public dueDate: Date,
        public returnDate: Date | null = null,
        public isReturned: boolean = false,
    ){}
}