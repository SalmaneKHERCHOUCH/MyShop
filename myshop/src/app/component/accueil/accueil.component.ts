import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})

export class AccueilComponent {

  show: boolean;

  constructor() {
    this.show = false;
  }
  
  title(hover : boolean) {
    this.show = hover;
  }

}
