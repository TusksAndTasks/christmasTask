import { MainData } from './interfaces';

export class SliderFilter {
  createFilteredData(currentData: MainData[]): MainData[] {
    const ranges = Array.from(document.querySelectorAll('input[type=range]'));

    const filteredData: MainData[] = currentData.filter(
      (infoCard: MainData) => +infoCard.count <= +(ranges[0] as HTMLInputElement).value,
    );

    const fullFilteredData: MainData[] = filteredData.filter(
      (infoCard: MainData) => +infoCard.year <= +(ranges[1] as HTMLInputElement).value,
    );

    return fullFilteredData;
  }
}
