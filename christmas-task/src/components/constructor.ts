import { Reader } from "./reader";
import { mainData } from './interfaces'

export class Constructor {
   
    reader: Reader;

    constructor(){
        this.reader = new Reader;
    }
    
    createCards(){
        let cardsContainer = (<HTMLElement>document.querySelector('.cards-container'));
        let content = '';
        let data = this.reader.read(); 
         
        data.forEach((data): void => {
            content = content + `
            <div class="card">
            <p class="card-name">${data.name}</p>
            <div class="card-box">
            <div class="figures-box">
            <img class="toy-image" src="assets/toys/${data.num}.png" alt="игрушка">
            <button class="favorite-button"></button>
            </div>
            <div class="info-box">
            <p class="numbers">Количество: <span>${data.count}</span></p>
            <p class="year">Год покупки: <span>${data.year}</span></p>
            <p class="form">Форма: <span>${data.shape}</span></p>
            <p class="color">Цвет: <span>${data.color}</span></p>
            <p class="size">Размер: <span>${data.size}</span></p>
            <p class="isFavorite">Любимая: <span>${data.favorite ? 'Да' : 'Нет'}</span></p>
            </div>
            </div>
            </div>
            ` 
        } )

        if(data.length === 0){content = 'Извините, совпадений не обнаружено'}

        cardsContainer.innerHTML = content;


    }

}