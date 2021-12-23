import { mainData } from './interfaces';

export class Search {
  constructor() {}

  createSearchedData(currentData: mainData[]): mainData[] {
    let search = document.querySelector('.search') as HTMLInputElement;
    let searchedData: mainData[] = [];

    if (!search.value) {
      return currentData;
    }

    currentData.forEach((infoCard: mainData): void => {
      if (infoCard.name.toUpperCase().includes(search.value.toUpperCase())) {
        searchedData.push(infoCard);
      }
    });

    return searchedData;
  }
}
