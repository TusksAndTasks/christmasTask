import { Constructor } from './constructor';
import { Setter } from './setter';

export class Router {
  createRoute() {
    const constructor = new Constructor();
    const setter = new Setter();
    const hash = location.hash ? location.hash : 'no hash';
    const main = document.querySelector('main') as HTMLElement;

    switch (hash) {
      case 'no hash':
        main.innerHTML = `<div class="main-page-container">
        <div class="main-text">
            Новогодняя игра
            «Наряди ёлку»
        </div>
        <a href="#toys">
          <div class="toy-button">
            Начать
          </div>  
        </a>
    </div>`;
        break;
      case '#toys':
        main.innerHTML = `<div class="main-container">
      <div class="options-container">
          <div class="filters-container">
              <p>Фильтры по значению</p>
              <div class="form-buttons-container">
                  Форма:  
                  <button data-value="шар"></button>
                  <button data-value="колокольчик"></button>
                  <button data-value="шишка"></button>
                  <button data-value="снежинка"></button>
                  <button data-value="фигурка"></button>
              </div>
              <div class="color-buttons-container">
                  Цвет:
                  <button data-value="белый"></button>
                  <button data-value="желтый"></button>
                  <button data-value="красный"></button>
                  <button data-value="синий"></button>
                  <button data-value="зелёный"></button>
              </div>
              <div class="size-buttons-container">
                  Размер:
                  <button data-value="большой"></button>
                  <button data-value="средний"></button>
                  <button data-value="малый"></button>
              </div>
              <div class="favorite-container">
                  Любимые:
                  <input type="checkbox" class="favorite" id="favorite">
                  <label for="checkbox" class="favorite-label"></label> 
              </div>
          </div>
          <div class="selectors-container">
              ФИЛЬТРЫ ПО ДИАПАЗОНУ
              <div class="selector-box">
                  <div class="count-container">
                      Количество экземпляров:
                      <div class="slider-container">
                          <div class="slider-number">1</div>
                          <input type="range" id="count" name="count" min="1" max="12" step="1" value="12">
                          <div class="slider-number counter-number">12</div>
                      </div>    
                  </div>
                  <div class="year-container">
                      Количество экземпляров:
                      <div class="slider-container">
                          <div class="slider-number">1940</div>
                          <input type="range" id="year" name="year" min="1940" max="2020" step="10" value="2020">
                          <div class="slider-number year-number">2020</div>
                      </div>    
                  </div>
              </div>
          </div>
          <div class="sorting-container">
              Сортировка
              <select class="sort">
                  <option selected="" value="sort-name-up">По названию от «А» до «Я»</option>
                  <option value="sort-name-down">По названию от «Я» до «А»</option>
                  <option value="sort-count-up">По количеству по возрастанию</option>
                  <option value="sort-count-down">По количеству по убыванию</option>
                </select>
                <button class="reset">Сброс Фильтров</button>
          </div>
      </div>    
      <div class="cards-container">
      </div>
  </div>`;
        setter.setListeners();
        constructor.createCards();
        break;
      case '#tree':
        main.innerHTML = `<div class="tree-page-container">
      <div class="settings-container">
          Настройки
         <div class="settings-box">
           <div class="audio"></div>
           <div class="snow"></div>
         </div>
         Выберите фон
         <div class="background-box">
           <div class="background-button"></div>
           <div class="background-button"></div>
           <div class="background-button"></div>
           <div class="background-button"></div>
           <div class="background-button"></div>
           <div class="background-button"></div>
           <div class="background-button"></div>
           <div class="background-button"></div>
         </div>
         Выберите ёлку
         <div class="tree-pick-box">
           <div class="tree-button"></div>
           <div class="tree-button"></div>
           <div class="tree-button"></div>
           <div class="tree-button"></div>
         </div>
         Гирлянда
         <div class="garland-box">
           <div class="garland-color"></div>
           <div class="garland-color"></div>
           <div class="garland-color"></div>
           <div class="garland-color"></div>
           <div class="garland-color"></div>
           <div class="garland-button"></div>
         </div>
      </div>
      <div class="tree-container">
         <img class="tree" src="assets/tree/1.png" usemap="#tree-map">
         <map name="tree-map">
    <area coords="1,561,38,620,78,654,138,687,203,700,283,693,356,696,399,679,449,657,465,626,475,585,471,539,452,510,445,463,426,422,420,359,396,303,392,242,350,183,336,133,302,59,267,10,227,14,163,132,24,438" shape="poly">
    </area>
</map>
      </div>
      <div class="tree-toys-container">
        <div class="fav-box">
         <p>Выберите игрушку</p>
         <div class="fav-toys-box"></div>
        </div>
        <p>Созданные ёлки</p>
        <div class="finished-trees">
           <div class="tree-button"></div>
           <div class="tree-button"></div>
           <div class="tree-button"></div>
           <div class="tree-button"></div>
        </div>
      </div>
   </div>`;
        constructor.crateFavCards();
        constructor.createFavToys();
        setter.setTreeListeners();
        setter.setDragListeners();
        break;
    }
  }
}
