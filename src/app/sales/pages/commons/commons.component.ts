import { Component } from '@angular/core';

@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styles: [
  ]
})
export class CommonsComponent {
  nameLower: string = 'Francisco';
  nameUpper: string = 'Francisco';
  nameComplete: string = 'Francisco arce';

  date: Date = new Date();
}
