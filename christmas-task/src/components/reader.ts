import data from '../data'
import { mainData } from './interfaces'
import { Filter } from './filter'

export class Reader {
    private data: mainData[]

    constructor(){
       this.data = data 
    }

    read(){
        let filter = new Filter;
        let currentData: mainData[] = filter.createFilteredData(this.data);
        return currentData;
    }
}