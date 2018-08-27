import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Mazinger Z";

  array = [1,2,3,4,5,6,7,8,9,10];

  pi = Math.PI;
  a = 0.234;
  salary = 1234.54;

  heroe = {
    name: "Wolverine",
    key: "Wolverine",
    age: 500,
    address: {
      street: "Second",
      house: "20"
    }
  };

  promiseValue = new Promise ((resolve, reject)=>{
      setTimeout( ()=>resolve('Data arrived!'), 3500);
  });

  date = new Date();
}
