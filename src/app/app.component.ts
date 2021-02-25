import { Component, OnInit } from '@angular/core';

import { Bingo } from './bingo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  title = 'bingo-app';

  arrayBingo: Array<Bingo> = new Array();



  ngOnInit(){

    for (let i = 1; i < 76; i++) {
      this.arrayBingo.push({ id: i, checked: false });
  }

  }

  lastNumber: number;

  public sorteo() {
   console.log('Click');

   var coincide = true;
   var numeroSorteo: number;

   numeroSorteo = Math.floor(Math.random() * 75) + 1;
   console.log(numeroSorteo);
   while (this.arrayBingo[numeroSorteo-1].checked) {
    numeroSorteo = Math.floor(Math.random() * 75) + 1;
    console.log(numeroSorteo);
   }

   this.arrayBingo[numeroSorteo-1].checked = true;
   this.lastNumber = numeroSorteo;

   console.log(numeroSorteo);
   this.spinner = false;
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>this.sorteo());
}


spinner: Boolean = false;

clickButton(){

  this.spinner = true;
  this.delay(1000);
}



}
