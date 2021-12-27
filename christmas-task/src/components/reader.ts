import data from '../data';
import { MainData } from './interfaces';
import { Filter } from './filter';
import { SliderFilter } from './slide-filter';
import { Sorter } from './sorter';
import { Search } from './search';

export class Reader {
  private data: MainData[];

  constructor() {
    this.data = data;
  }

  read(): MainData[] {
    const filter = new Filter();
    const sliderFilter = new SliderFilter();
    const search = new Search();
    const sorter = new Sorter();
    let currentData: MainData[] = filter.createFilteredData(this.data);
    currentData = sliderFilter.createFilteredData(currentData);
    currentData = search.createSearchedData(currentData);
    currentData = sorter.createSortedData(currentData);
    return currentData;
  }
}
