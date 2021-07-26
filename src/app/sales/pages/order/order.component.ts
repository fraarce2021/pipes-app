import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.inferfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  isCapitalLetter: boolean = true;

  orderBy: string = '';

  heroes: Hero[] = [
    {
      name: 'Batman',
      canFly: false,
      colour: Color.black
    },
    {
      name: 'Robin',
      canFly: false,
      colour: Color.green
    },
    {
      name: 'Superman',
      canFly: true,
      colour: Color.blue
    },
    {
      name: 'Daredevil',
      canFly: false,
      colour: Color.red
    },
  ];

  changeLetters() {
    this.isCapitalLetter = !this.isCapitalLetter;
  }

  changeOrder(value:string):void{
    this.orderBy = value;
  }
}
