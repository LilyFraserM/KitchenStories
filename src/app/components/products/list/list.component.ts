import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public products:any;

  /*constructor() { }

  public show:boolean= false;
  ngOnInit(): void {
  }*/
  constructor(private dataSrv:DataService) { }

  ngOnInit(): void {
    this.products = this.dataSrv.products;
  }
  /*showMore(){
    this.show =! this.show;
  }*/

  product : any = {
   // id:1010101023,
    title:'Brown eggs',
    type: 'dairy',
    description: 'Sweet fresh stawberry on the wooden table',
    price:28.1,
    rating: 4,
    launchDate:new Date(),
   // para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem beatae, sapiente mollitia atque ipsam iusto sunt ex, illum non eius doloribus ad repudiandae. Ex neque fuga quod magnam, eligendi vel?'
  }
 
}


