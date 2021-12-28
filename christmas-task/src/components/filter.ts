import { MainData } from './interfaces';

export class Filter {
  createFilteredData(data: MainData[]): MainData[] {
    let filteredData = data;
    let fullFilteredData: MainData[] = [];
    const colorFilteredData: MainData[] = [];
    const sizeFilteredData: MainData[] = [];
    const favFilteredData: MainData[] = [];
    let colorCheck = false;
    let sizeCheck = false;
    let favCheck = false;
    let shapeCheck = false;

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
          filteredData = data.filter((infoCard: MainData) => infoCard.shape === (button as HTMLElement).dataset.value);
          fullFilteredData.push(...filteredData);
        }
      });
    }

    if (colorCheck) {
      if (fullFilteredData.length === 0) {
        colorButtons.forEach((button: Element): void => {
          if ((button as HTMLElement).classList.contains('active')) {
            filteredData = data.filter(
              (infoCard: MainData) => infoCard.color === (button as HTMLElement).dataset.value,
            );
            fullFilteredData.push(...filteredData);
          }
        });
      } else {
        colorButtons.forEach((button: Element): void => {
          if ((button as HTMLElement).classList.contains('active')) {
            filteredData = fullFilteredData.filter(
              (infoCard: MainData) => infoCard.color === (button as HTMLElement).dataset.value,
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
            filteredData = data.filter((infoCard: MainData) => infoCard.size === (button as HTMLElement).dataset.value);
            fullFilteredData.push(...filteredData);
          }
        });
      } else {
        sizeButtons.forEach((button: Element): void => {
          if ((button as HTMLElement).classList.contains('active')) {
            filteredData = fullFilteredData.filter(
              (infoCard: MainData) => infoCard.size === (button as HTMLElement).dataset.value,
            );
            sizeFilteredData.push(...filteredData);
          }
        });
        fullFilteredData = sizeFilteredData;
      }
    }

    if (favCheck) {
      if (fullFilteredData.length === 0 && !shapeCheck && !colorCheck && !sizeCheck) {
        filteredData = data.filter((infoCard: MainData) => infoCard.favorite === favoriteCheckbox.checked);
        fullFilteredData.push(...filteredData);
      } else {
        filteredData = fullFilteredData.filter((infoCard: MainData) => infoCard.favorite === favoriteCheckbox.checked);
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

  createFavData(data: MainData[]): MainData[] {
    const filteredFav: MainData[] = data.filter((infoCard: MainData) => infoCard.favorite === true);
    return filteredFav;
  }
}
