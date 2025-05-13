import { KindBooks } from "../enums/KindBooks"

export interface IBook{
    id:string,
    title:string,
    author:string
    kind:KindBooks[]
}