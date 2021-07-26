import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'capitalLetters'
})

export class CapitalLetterPipe implements PipeTransform{

  transform(value:string, isCapitalLetters:boolean = true):string{
    return isCapitalLetters ? value.toUpperCase() : value.toLowerCase();
  }

}
