import { Constructor } from "./constructor";

export class Setter{

    constructor(){

    }

    setListeners(){
        const shapeButtons = Array.from(document.querySelectorAll('.form-buttons-container button'));
        const colorButtons =  Array.from(document.querySelectorAll('.color-buttons-container button'));
        const sizeButtons =  Array.from(document.querySelectorAll('.size-buttons-container button'));
        const favoriteCheckbox = document.querySelector('.favorite') as HTMLInputElement;

        const setterConstructor = new Constructor

        shapeButtons.forEach((button: Element): void =>{
            (button as HTMLElement).addEventListener('click', function(){
             button.classList.toggle('active');
             setterConstructor.createCards(); 
            }) 
        })

        colorButtons.forEach((button: Element): void => {
            (button as HTMLElement).addEventListener('click', function(){
                button.classList.toggle('active');
                setterConstructor.createCards(); 
            })
        })

        sizeButtons.forEach((button: Element): void => {
            (button as HTMLElement).addEventListener('click', function(){
                button.classList.toggle('active');
                setterConstructor.createCards(); 
            })
        })

        favoriteCheckbox.addEventListener('change', function(){
            setterConstructor.createCards(); 
        })
    }
}

