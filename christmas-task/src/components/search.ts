import { MainData } from './interfaces';

export class Search {
  createSearchedData(currentData: MainData[]): MainData[] {
    const search = document.querySelector('.search') as HTMLInputElement;
    const searchedData: MainData[] = [];

    if (!search.value) {
      return currentData;
    }

    currentData.forEach((infoCard: MainData): void => {
      if (infoCard.name.toUpperCase().includes(search.value.toUpperCase())) {
        searchedData.push(infoCard);
      }
    });

    return searchedData;
  }
}
