import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent  {

//i18nSelect
name: string = 'Francisco';
gender: string = 'masculino';

invitationMap ={
  'masculino': 'invitarlo',
  'femenino': 'invitarla'
}

//i18nPlural
customers: string[] = ['Francisco','Arce','Nikole','Velkoz'];
customersMap = {
  '=0':'no tenemos ningun cliente esperando.',
  '=1':'tenemos un cliente esperando.',
  'other':'tenemos # clientes esperando.',
}

changeName():void{
  if(this.name=="Francisco")
  {
    this.name = "Nikole";
    this.gender = "femenino";
  }
  else{
    this.name = "Francisco";
    this.gender = "masculino";
  }
}

deleteCustomer():void{
  this.customers.pop();
}

//Keyvalue Pipe
person={
  name: 'Francisco',
  age: '24',
  address: 'Alajuela, Costa Rica'
}

//Json Pipe
heroes=[
  {
    name: 'Batman',
    canFly: true
  },
  {
    name: 'Monkey D Luffy',
    canFly: false
  },
  {
    name: 'Ragnar',
    canFly: false
  }
]

//Async Pipe
myObservable = interval(2000);

valuePromise = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('Promise End');
  }, 3500);
});

}
