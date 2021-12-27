import { MainData } from './interfaces';

export class Sorter {
  createSortedData(currentData: MainData[]) {
    const sortingInput = document.querySelector('.sort') as HTMLSelectElement;
    let sortedData: MainData[] = [];

    if (sortingInput.value === 'sort-name-up') {
      sortedData = currentData.sort(function (firstInfoCard: MainData, secondInfoCard: MainData): number {
        if (
          firstInfoCard.name.toUpperCase().replace(/\s/g, '') < secondInfoCard.name.toUpperCase().replace(/\s/g, '')
        ) {
          return -1;
        }
        if (
          firstInfoCard.name.toUpperCase().replace(/\s/g, '') > secondInfoCard.name.toUpperCase().replace(/\s/g, '')
        ) {
          return 1;
        }
        return 0;
      });
    }

    if (sortingInput.value === 'sort-name-down') {
      sortedData = currentData.sort(function (firstInfoCard: MainData, secondInfoCard: MainData): number {
        if (
          firstInfoCard.name.toUpperCase().replace(/\s/g, '') > secondInfoCard.name.toUpperCase().replace(/\s/g, '')
        ) {
          return -1;
        }
        if (
          firstInfoCard.name.toUpperCase().replace(/\s/g, '') < secondInfoCard.name.toUpperCase().replace(/\s/g, '')
        ) {
          return 1;
        }
        return 0;
      });
    }

    if (sortingInput.value === 'sort-count-up') {
      sortedData = currentData.sort(function (firstInfoCard: MainData, secondInfoCard: MainData): number {
        if (+firstInfoCard.count < +secondInfoCard.count) {
          return -1;
        }
        if (+firstInfoCard.count > +secondInfoCard.count) {
          return 1;
        }
        return 0;
      });
    }

    if (sortingInput.value === 'sort-count-down') {
      sortedData = currentData.sort(function (firstInfoCard: MainData, secondInfoCard: MainData): number {
        if (+firstInfoCard.count > +secondInfoCard.count) {
          return -1;
        }
        if (+firstInfoCard.count < +secondInfoCard.count) {
          return 1;
        }
        return 0;
      });
    }

    return sortedData;
  }
}
