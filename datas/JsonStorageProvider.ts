import * as fs from "fs";
import * as path from "path";
import { json } from "stream/consumers";

export class JsonStorageProvider{
    private static dataFolder = path.join(__dirname,"../jsonfile");
    public static readFromFile<T> (filename:string){
        const fullPath = path.join(this.dataFolder,filename);
        if(!fs.existsSync(fullPath)){
            console.warn("file not fond");
            return [];
        }
        try {
            const raw = fs.readFileSync(fullPath,"utf-8");
            return JSON.parse(raw) as T[];
        } catch (error) {
            console.error("read file err",error);
            return [];
        }
    }
    public static writeToFile<T> (filename:string,data:T[]):void{
        const fullPath = path.join(this.dataFolder,filename);
        try {
            fs.writeFileSync(fullPath,JSON.stringify(data,null,2),"utf-8");
            console.log("save data success");
        } catch (error) {
            console.error("save data err",error);
        }
    }
}