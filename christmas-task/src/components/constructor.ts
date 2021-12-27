import { Reader } from './reader';

export class Constructor {
  reader: Reader;

  constructor() {
    this.reader = new Reader();
  }

  createCards(): void {
    const cardsContainer = <HTMLElement>document.querySelector('.cards-container');
    let content = '';
    const data = this.reader.read();

    data.forEach((infoCard): void => {
      content =
        content +
        `
            <div class="card">
            <p class="card-name">${infoCard.name}</p>
            <div class="card-box">
            <div class="figures-box">
            <img class="toy-image" src="assets/toys/${infoCard.num}.png" alt="игрушка">
            <button class="favorite-button"></button>
            </div>
            <div class="info-box">
            <p class="numbers">Количество: <span>${infoCard.count}</span></p>
            <p class="year">Год покупки: <span>${infoCard.year}</span></p>
            <p class="form">Форма: <span>${infoCard.shape}</span></p>
            <p class="color">Цвет: <span>${infoCard.color}</span></p>
            <p class="size">Размер: <span>${infoCard.size}</span></p>
            <p class="isFavorite">Любимая: <span>${infoCard.favorite ? 'Да' : 'Нет'}</span></p>
            </div>
            </div>
            </div>
            `;
    });

    if (data.length === 0) {
      content = 'Извините, совпадений не обнаружено';
    }

    cardsContainer.innerHTML = content;
  }
}
