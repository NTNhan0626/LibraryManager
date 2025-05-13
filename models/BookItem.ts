export class BookItem {
    constructor(
        public id: string,
        public idBook: string,
        public available: boolean
    ) {}

    // Getter và Setter cho id
    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    // Getter và Setter cho idBook
    public getIdBook(): string {
        return this.idBook;
    }

    public setIdBook(idBook: string): void {
        this.idBook = idBook;
    }

    // Getter và Setter cho available
    public isAvailable(): boolean {
        return this.available;
    }

    public setAvailable(available: boolean): void {
        this.available = available;
    }
}
