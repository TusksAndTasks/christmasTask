import { Constructor } from './constructor';

export class Setter {
  setListeners() {
    const setterConstructor = new Constructor();
    const shapeButtons = Array.from(document.querySelectorAll('.form-buttons-container button'));
    const colorButtons = Array.from(document.querySelectorAll('.color-buttons-container button'));
    const sizeButtons = Array.from(document.querySelectorAll('.size-buttons-container button'));
    const favoriteCheckbox = document.querySelector('.favorite') as HTMLInputElement;
    const sortingInput = document.querySelector('.sort') as HTMLSelectElement;
    const resetButton = document.querySelector('.reset') as HTMLElement;
    const search = document.querySelector('.search') as HTMLInputElement;

    const ranges = Array.from(document.querySelectorAll('input[type=range]'));
    const countNumber = document.querySelector('.counter-number') as HTMLElement;
    const yearNumber = document.querySelector('.year-number') as HTMLElement;

    search.addEventListener('input', function (): void {
      setterConstructor.createCards();
    });

    (ranges[0] as HTMLInputElement).addEventListener('input', function (): void {
      const value = (ranges[0] as HTMLInputElement).value;
      (ranges[0] as HTMLInputElement).style.background = `linear-gradient(to right, #278D9F 0%, #278D9F ${
        +value * 8.3
      }%, #C4C4C4 ${+value * 8.3}%, #C4C4C4 100%)`;
      countNumber.textContent = `${value}`;
      setterConstructor.createCards();
    });

    (ranges[1] as HTMLInputElement).addEventListener('input', function (): void {
      const value = (ranges[1] as HTMLInputElement).value;
      (ranges[1] as HTMLInputElement).style.background = `linear-gradient(to right, #278D9F 0%, #278D9F ${
        (+value - 1940) * 1.25
      }%, #C4C4C4 ${(+value - 1940) * 1.25}%, #C4C4C4 100%)`;
      yearNumber.textContent = `${value}`;
      setterConstructor.createCards();
    });

    sortingInput.addEventListener('change', function (): void {
      setterConstructor.createCards();
    });

    shapeButtons.forEach((button: Element): void => {
      (button as HTMLElement).addEventListener('click', function (): void {
        button.classList.toggle('active');
        setterConstructor.createCards();
      });
    });

    colorButtons.forEach((button: Element): void => {
      (button as HTMLElement).addEventListener('click', function (): void {
        button.classList.toggle('active');
        setterConstructor.createCards();
      });
    });

    sizeButtons.forEach((button: Element): void => {
      (button as HTMLElement).addEventListener('click', function (): void {
        button.classList.toggle('active');
        setterConstructor.createCards();
      });
    });

    favoriteCheckbox.addEventListener('change', function (): void {
      setterConstructor.createCards();
    });

    resetButton.addEventListener('click', function (): void {
      shapeButtons.forEach((button: Element): void => {
        if ((button as HTMLElement).classList.contains('active')) {
          (button as HTMLElement).classList.remove('active');
        }
      });

      colorButtons.forEach((button: Element): void => {
        if ((button as HTMLElement).classList.contains('active')) {
          (button as HTMLElement).classList.remove('active');
        }
      });

      sizeButtons.forEach((button: Element): void => {
        if ((button as HTMLElement).classList.contains('active')) {
          (button as HTMLElement).classList.remove('active');
        }
      });

      if (favoriteCheckbox.checked) {
        favoriteCheckbox.checked = false;
      }

      (ranges[0] as HTMLInputElement).value = '12';
      (ranges[0] as HTMLInputElement).style.background =
        'linear-gradient(to right, #278D9F 0%, #278D9F 100%, #C4C4C4 100%, #C4C4C4 100%)';
      countNumber.textContent = '12';

      (ranges[1] as HTMLInputElement).value = '2020';
      (ranges[1] as HTMLInputElement).style.background =
        'linear-gradient(to right, #278D9F 0%, #278D9F 100%, #C4C4C4 100%, #C4C4C4 100%)';
      yearNumber.textContent = '2020';

      setterConstructor.createCards();
    });
  }

  setTreeListeners() {
    const bgButton = Array.from(document.querySelectorAll('.background-button'));
    const treeContainer = document.querySelector('.tree-container') as HTMLElement;
    const audio = document.querySelector('.audio') as HTMLElement;
    const audioFile = new Audio();
    let isPlay = false;
    const treeButtons = Array.from(document.querySelectorAll('.tree-button'));
    const tree = document.querySelector('.tree') as HTMLImageElement;
    audioFile.src = './assets/audio/audio.mp3';

    bgButton.forEach((button: Element, index: number): void => {
      (button as HTMLElement).addEventListener('click', function () {
        treeContainer.style.backgroundImage = `url("./assets/bg/${index + 1}.jpg")`;
      });
    });
    audio.addEventListener('click', function () {
      isPlay = !isPlay;
      if (isPlay) {
        audioFile.play();
        audio.classList.add('active');
      } else {
        audioFile.pause();
        audio.classList.remove('active');
      }
    });
    treeButtons.forEach((button: Element, index: number): void => {
      (button as HTMLElement).addEventListener('click', function () {
        tree.src = `/assets/tree/${index + 1}.png`;
      });
    });
  }
}
