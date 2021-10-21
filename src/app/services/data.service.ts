import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // sample object array // sample json array
  public products:any = [
    /*{ id: 1001, name: "Mac book xyz series", price:367435, desc:"It is a laptop", brand:"apple", active:true},
    { id: 1002, name: "Dell book xyz series", price:78435, desc:"It is a laptop", brand:"dell",active:true},
    { id: 1003, name: "Hp book xyz series", price:893435, desc:"It is a laptop", brand:"hp",active:false},
    { id: 1004, name: "Lenovo book xyz series", price:783435, desc:"It is a laptop", brand:"lenovo",active:true},
    { id: 1005, name: "Acer book xyz series", price:903435, desc:"It is a laptop", brand:"acer",active:true},
    { id: 1006, name: "Assus book xyz series", price:893435, desc:"It is a laptop", brand:"assus",active:false},
  
  */
    {
      "name": "Brown eggs",
      "type": "dairy",
      "description": "Raw organic brown eggs in a basket",
      "filename": "0.jpg",
      "height": 600,
      "width": 400,
      "price": 28.1,
      "rating": 4
  },
  {
    "name": "apple",
    "type": "fruit",
    "description": "Granny smith apple",
    "filename": "0.jpg",
    "height": 600,
    "width": 400,
    "price": 3.4,
    "rating": 4
},
  {
      "name": "Sweet fresh stawberry",
      "type": "fruit",
      "description": "Sweet fresh stawberry on the wooden table",
      "filename": "1.jpg",
      "height": 450,
      "width": 299,
      "price": 29.45,
      "rating": 4
  },
  {
      "name": "Asparagus",
      "type": "vegetable",
      "description": "Asparagus with ham on the wooden table",
      "filename": "2.jpg",
      "height": 450,
      "width": 299,
      "price": 18.95,
      "rating": 3
  },
  {
      "name": "Green smoothie",
      "type": "dairy",
      "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
      "filename": "3.jpg",
      "height": 600,
      "width": 399,
      "price": 17.68,
      "rating": 4
  },
  {
      "name": "Raw legums",
      "type": "vegetable",
      "description": "Raw legums on the wooden table",
      "filename": "4.jpg",
      "height": 450,
      "width": 299,
      "price": 17.11,
      "rating": 2
  },
  {
      "name": "Baking cake",
      "type": "dairy",
      "description": "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
      "filename": "5.jpg",
      "height": 450,
      "width": 675,
      "price": 11.14,
      "rating": 4
  },
  {
      "name": "Pesto with basil",
      "type": "vegetable",
      "description": "Italian traditional pesto with basil, chesse and oil",
      "filename": "6.jpg",
      "height": 450,
      "width": 299,
      "price": 18.19,
      "rating": 2
  },
  {
      "name": "Hazelnut in black ceramic bowl",
      "type": "vegetable",
      "description": "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
      "filename": "7.jpg",
      "height": 450,
      "width": 301,
      "price": 27.35,
      "rating": 0
  },
  {
      "name": "Fresh stawberry",
      "type": "fruit",
      "description": "Sweet fresh stawberry on the wooden table",
      "filename": "8.jpg",
      "height": 600,
      "width": 399,
      "price": 28.59,
      "rating": 4
  },
  {
      "name": "Lemon and salt",
      "type": "fruit",
      "description": "Rosemary, lemon and salt on the table",
      "filename": "9.jpg",
      "height": 450,
      "width": 299,
      "price": 15.79,
      "rating": 5
  }
 ]

  showList():any {
    return this.products;
  }

  showActives():any {
    return this.products.filter(function(product:any) {
      return product.active;
    });
  }

  constructor() { }
}
