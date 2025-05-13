import { IUser } from "../interfaces/IUser";

export class User implements IUser{
    constructor(
        public readonly id:string,
        public name:string,
        public phone:string
    ){}
    
   

}