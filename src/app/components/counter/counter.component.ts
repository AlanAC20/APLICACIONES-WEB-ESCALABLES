import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [NgIf],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter : number = 100; //es public por default

  constructor(){
    console.log("Construyendo el componente counter");

  }

  incrementBy(value : number = 1) : void{
    this.counter+= value;
  }
}
