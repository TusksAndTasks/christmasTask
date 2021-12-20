import data from '../data'
import { mainData } from './interfaces'

export class Reader {
    private data: mainData[]

    constructor(){
       this.data = data 
    }

    read(){
        let currentData: mainData[] = this.data;
        return currentData;
    }
}