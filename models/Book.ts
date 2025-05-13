import { KindBooks } from "../enums/KindBooks";
import { IBook } from "../interfaces/IBook";

export class Book implements IBook {
    constructor(
        public id: string,
        public title: string,
        public author: string,
        public kind: KindBooks[]
    ) {}

    // Getter và Setter cho id
    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    // Getter và Setter cho title
    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    // Getter và Setter cho author
    public getAuthor(): string {
        return this.author;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }
}
