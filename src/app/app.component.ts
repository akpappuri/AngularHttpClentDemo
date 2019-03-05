import { Component } from '@angular/core';
import { Observable, fromEventPattern } from 'rxjs';
import { DataService } from './data.service';

import { Product } from './product';
import { Family } from './family';
import { Location } from './location';
import { Transaction } from './transactions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHttpClientGetDemo';
 
  private products: Product[] = [];
  private families: Family[] = [];
  private locations: Location[] = [];
  private transactions: Transaction[] = [];

  private productsObservable: Observable<Product[]> ; 


  constructor(private dataService: DataService) {
   this.productsObservable = this.dataService.get_products();

    this.dataService.get_products().subscribe( (data: any[]) => {
      this.products = data;
      console.log (data);
    });


    this.dataService.get_families().subscribe( (data: any[]) => {
      this.families = data;
     console.log (data);
    });

    this.dataService.get_locations().subscribe( (data: any[]) => {
      this.locations = data;
      console.log (data);
    });

    this.dataService.get_transactions().subscribe((res : any[])=>{
      console.log(res);
      this.transactions = res;
  });

  }


}
  

