import data from '../data';
import { mainData } from './interfaces';
import { Filter } from './filter';
import { SliderFilter } from './slide-filter';

export class Reader {
    private data: mainData[]

    constructor(){
       this.data = data 
    }

    read(){
        let filter = new Filter;
        let sliderFilter = new SliderFilter;
        let currentData: mainData[] = filter.createFilteredData(this.data);
        currentData = sliderFilter.createFilteredData(currentData);
        return currentData;
    }
}