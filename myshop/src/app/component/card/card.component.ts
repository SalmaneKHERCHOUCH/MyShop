import { Component, EventEmitter, Output } from '@angular/core';
import { Produit } from '../../interface/produit';

export const produits: Produit[] = [
  {
    id: 1,
    name: "iPhone 12",
    specifications: {
      color: "black",
      weight: "250g",
      storage: "256GB",
      price: "1000$"
    },
    picture: "iphone12.png"
  },
  {
    id: 2,
    name: "Airpods",
    specifications: {
      color: "white",
      weight: "50g",
      storage: "N/A",
      price: "200$"
    },
    picture: "airpods.png"
  },
  {
    id: 3,
    name: "Samsung S22",
    specifications: {
      color: "black",
      weight: "250g",
      storage: "512GB",
      price: "900$"
    },
    picture: "samsung22.png"
  },
  {
    id: 4,
    name: "Samsung Note10",
    specifications: {
      color: "black",
      weight: "250g",
      storage: "256GB",
      price: "950$"
    },
    picture: "samsungnote10.png"
  },
  {
    id: 5,
    name: "Phone 14",
    specifications: {
      color: "white",
      weight: "250g",
      storage: "256GB",
      price: "1300$"
    },
    picture: "iphone14.png"
  }
]

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {


  @Output() titre = new EventEmitter<boolean>;

  productList:Produit[]

    constructor () {
      this.productList = produits
    } 

    showTitle(hover: boolean) {
      this.titre.emit(hover);
    }

    saveProduct(id:any, numberOf:any) {
      localStorage.setItem(id, numberOf);
      console.log(localStorage.length);
    }

    
    
}
