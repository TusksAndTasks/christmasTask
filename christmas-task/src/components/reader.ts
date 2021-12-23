import data from '../data';
import { mainData } from './interfaces';
import { Filter } from './filter';
import { SliderFilter } from './slide-filter';
import { Sorter } from './sorter';
import { Search } from './search';

export class Reader {
    private data: mainData[]

    constructor(){
       this.data = data 
    }

    read(){
        let filter = new Filter;
        let sliderFilter = new SliderFilter;
        let search = new Search;
        let sorter = new Sorter;
        let currentData: mainData[] = filter.createFilteredData(this.data);
        currentData = sliderFilter.createFilteredData(currentData);
        currentData = search.createSearchedData(currentData);
        currentData = sorter.createSortedData(currentData);
        return currentData;
    }
}