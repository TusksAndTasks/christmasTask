import { mainData } from './interfaces';

export class SliderFilter {
  constructor() {}

  createFilteredData(currentData: mainData[]): mainData[] {
    let ranges = Array.from(document.querySelectorAll('input[type=range]'));

    let filteredData: mainData[] = currentData.filter(
      (infoCard: mainData) => +infoCard.count <= +(ranges[0] as HTMLInputElement).value,
    );

    let fullFilteredData: mainData[] = filteredData.filter(
      (infoCard: mainData) => +infoCard.year <= +(ranges[1] as HTMLInputElement).value,
    );

    return fullFilteredData;
  }
}
