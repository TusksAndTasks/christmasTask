import { mainData } from './interfaces';

export class Filter {
  constructor() {}

  createFilteredData(data: mainData[]): mainData[] {
    let filteredData = data;
    let fullFilteredData: mainData[] = [];
    let colorFilteredData: mainData[] = [];
    let sizeFilteredData: mainData[] = [];
    let favFilteredData: mainData[] = [];
    let colorCheck: boolean = false;
    let sizeCheck: boolean = false;
    let favCheck: boolean = false;
    let shapeCheck: boolean = false;

    const shapeButtons = Array.from(document.querySelectorAll('.form-buttons-container button'));
    const colorButtons = Array.from(document.querySelectorAll('.color-buttons-container button'));
    const sizeButtons = Array.from(document.querySelectorAll('.size-buttons-container button'));
    const favoriteCheckbox = document.querySelector('.favorite') as HTMLInputElement;

    shapeButtons.forEach((button: Element): void => {
      if ((button as HTMLElement).classList.contains('active')) {
        shapeCheck = true;
      }
    });

    colorButtons.forEach((button: Element): void => {
      if ((button as HTMLElement).classList.contains('active')) {
        colorCheck = true;
      }
    });

    sizeButtons.forEach((button: Element): void => {
      if ((button as HTMLElement).classList.contains('active')) {
        sizeCheck = true;
      }
    });

    if ((favoriteCheckbox as HTMLInputElement).checked) {
      favCheck = true;
    }

    if (shapeCheck) {
      shapeButtons.forEach((button: Element): void => {
        if ((button as HTMLElement).classList.contains('active')) {
          filteredData = data.filter((infoCard: mainData) => infoCard.shape === (button as HTMLElement).dataset.value);
          fullFilteredData.push(...filteredData);
        }
      });
    }

    if (colorCheck) {
      if (fullFilteredData.length === 0) {
        colorButtons.forEach((button: Element): void => {
          if ((button as HTMLElement).classList.contains('active')) {
            filteredData = data.filter(
              (infoCard: mainData) => infoCard.color === (button as HTMLElement).dataset.value,
            );
            fullFilteredData.push(...filteredData);
          }
        });
      } else {
        colorButtons.forEach((button: Element): void => {
          if ((button as HTMLElement).classList.contains('active')) {
            filteredData = fullFilteredData.filter(
              (infoCard: mainData) => infoCard.color === (button as HTMLElement).dataset.value,
            );
            colorFilteredData.push(...filteredData);
          }
        });
        fullFilteredData = colorFilteredData;
      }
    }

    if (sizeCheck) {
      if (fullFilteredData.length === 0) {
        sizeButtons.forEach((button: Element): void => {
          if ((button as HTMLElement).classList.contains('active')) {
            filteredData = data.filter((infoCard: mainData) => infoCard.size === (button as HTMLElement).dataset.value);
            fullFilteredData.push(...filteredData);
          }
        });
      } else {
        sizeButtons.forEach((button: Element): void => {
          if ((button as HTMLElement).classList.contains('active')) {
            filteredData = fullFilteredData.filter(
              (infoCard: mainData) => infoCard.size === (button as HTMLElement).dataset.value,
            );
            sizeFilteredData.push(...filteredData);
          }
        });
        fullFilteredData = sizeFilteredData;
      }
    }

    if (favCheck) {
      if (fullFilteredData.length === 0 && !shapeCheck && !colorCheck && !sizeCheck) {
        filteredData = data.filter((infoCard: mainData) => infoCard.favorite === favoriteCheckbox.checked);
        fullFilteredData.push(...filteredData);
      } else {
        filteredData = fullFilteredData.filter((infoCard: mainData) => infoCard.favorite === favoriteCheckbox.checked);
        favFilteredData.push(...filteredData);

        fullFilteredData = favFilteredData;
      }
    }

    if (fullFilteredData.length === 0) {
      return filteredData;
    } else {
      return fullFilteredData;
    }
  }
}
