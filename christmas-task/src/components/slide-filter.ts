import { mainData } from "./interfaces";

export class SliderFilter{

    constructor(){

    }

    createFilteredData(currentData: mainData[]){
           
        let ranges = Array.from(document.querySelectorAll('input[type=range]'));
         
        let filteredData: mainData[] = currentData.filter((infoCard: mainData) => +infoCard.count <= +(ranges[0] as HTMLInputElement).value);

        console.log((ranges[0] as HTMLInputElement).value);

        let test: mainData[] = filteredData.filter((infoCard: mainData) => +infoCard.year <= +(ranges[1] as HTMLInputElement).value);

        console.log(filteredData);


       return test;
    }

}