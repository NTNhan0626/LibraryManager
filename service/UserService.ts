import { JsonStorageProvider } from "../datas/JsonStorageProvider";
import { IUser } from "../interfaces/IUser";
import { User } from "../models/User";

export class UserService{
    
    public arrUser: User[] =[];
    constructor(){
        const rawUser = JsonStorageProvider.readFromFile<IUser>("User.json");
        this.arrUser = rawUser.map(data => new User(data.id,data.name,data.phone));
    }
    getAllUser(){
        return this.arrUser;
    }
    getUserById(id:string){
        return this.arrUser.find(us => us.id === id);
    }
    createUser(data:Required<IUser>) :User{
        const user = new User(data.id,data.name,data.phone);
        this.arrUser.push(user);
        JsonStorageProvider.writeToFile<User>("User.json",this.arrUser);
        return user;
    }
    updateUser(id : string ,data:Partial<IUser>):User | undefined{
        const user = this.arrUser.find(us => us.id === id);
        if(user){
            user.name = data.name? data.name : user.name;
            user.phone = data.phone? data.phone : user.phone;
            JsonStorageProvider.writeToFile("User.json",this.arrUser);
            return user;
        }
        return undefined;
    }
}