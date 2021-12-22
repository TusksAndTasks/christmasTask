import { Constructor } from "./constructor";

export class Setter{

    constructor(){

    }

    setListeners(){
        const setterConstructor = new Constructor
        const shapeButtons = Array.from(document.querySelectorAll('.form-buttons-container button'));
        const colorButtons =  Array.from(document.querySelectorAll('.color-buttons-container button'));
        const sizeButtons =  Array.from(document.querySelectorAll('.size-buttons-container button'));
        const favoriteCheckbox = document.querySelector('.favorite') as HTMLInputElement;
        const sortingInput = document.querySelector('.sort') as HTMLSelectElement;
        const resetButton = document.querySelector('.reset') as HTMLElement;

        let ranges = Array.from(document.querySelectorAll('input[type=range]'));
        let countNumber = document.querySelector('.counter-number') as HTMLElement;
        let yearNumber = document.querySelector('.year-number') as HTMLElement;

  
              
             (ranges[0] as HTMLInputElement).addEventListener("input", function(){
                let value = (ranges[0] as HTMLInputElement).value;
                (ranges[0] as HTMLInputElement).style.background = `linear-gradient(to right, #278D9F 0%, #278D9F ${+value * 8.3}%, #C4C4C4 ${+value * 8.3}%, #C4C4C4 100%)`;
                countNumber.textContent = `${value}`;
                setterConstructor.createCards(); 
             });

             (ranges[1] as HTMLInputElement).addEventListener('input', function(){
                let value = (ranges[1] as HTMLInputElement).value;
                (ranges[1] as HTMLInputElement).style.background = `linear-gradient(to right, #278D9F 0%, #278D9F ${(+value - 1940) * 1.25}%, #C4C4C4 ${(+value - 1940) * 1.25}%, #C4C4C4 100%)`;
                yearNumber.textContent = `${value}`;
                setterConstructor.createCards(); 
            });

            sortingInput.addEventListener('change', function(){
                setterConstructor.createCards(); 
            })



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


        resetButton.addEventListener('click', function(){
    
            shapeButtons.forEach((button: Element): void => {
                if((button as HTMLElement).classList.contains('active')){
                    (button as HTMLElement).classList.remove('active');
                }
            }); 
            
            colorButtons.forEach((button: Element): void => {
                if((button as HTMLElement).classList.contains('active')){
                    (button as HTMLElement).classList.remove('active');
                }
            });
            
            sizeButtons.forEach((button: Element): void => {
                if((button as HTMLElement).classList.contains('active')){
                    (button as HTMLElement).classList.remove('active');
                }
            }); 
            
            if(favoriteCheckbox.checked){
                favoriteCheckbox.checked = false;
            };
            
            (ranges[0] as HTMLInputElement).value = '12'; 
            (ranges[0] as HTMLInputElement).style.background = `linear-gradient(to right, #278D9F 0%, #278D9F 100%, #C4C4C4 100%, #C4C4C4 100%)`;
            countNumber.textContent = `12`;

            (ranges[1] as HTMLInputElement).value = '2020'; 
            (ranges[1] as HTMLInputElement).style.background = `linear-gradient(to right, #278D9F 0%, #278D9F 100%, #C4C4C4 100%, #C4C4C4 100%)`;
            yearNumber.textContent = `2020`;

            setterConstructor.createCards(); 
        })
    }
}

