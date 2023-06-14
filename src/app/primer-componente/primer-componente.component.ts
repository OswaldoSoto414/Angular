import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.scss']
})
export class PrimerComponenteComponent implements OnInit{

  public text: string = 'ABCDEFG';
  public x:number = 0;
  public show: boolean = false;
  public numbers: number[] = [1,2,3,4,5];  //array plano

  public users: any[] = [
    {name: 'John', age: 20, date: new Date('01/01/2000'), amount: 1000.00},
    {name: 'Mary', age: 30, date: new Date('01/01/1990'), amount: 2000.25},
    {name: 'Mike', age: 40, date: new Date('01/01/1980'), amount: 3000.00},
    {name: 'Jane', age: 50, date: new Date('01/01/1970'), amount: 4000.99},
  ];

  public products: any[] = [];

  constructor(private route: ActivatedRoute, private http:HttpService) { }

  /* updatedProduct = {
    title: 'puro aifon'
  }; */

  ngOnInit(): void {
    this.http.getproductos().subscribe((data:any) => {
      console.log('array', data);

      this.http.putproductos().subscribe((put:any) => {
      console.log('PUT request successful', put);

      this.http.deleteProductos().subscribe((data:any) => {
        console.log('delete request successful', data);
      })
      })
      this.products = data.products;
    })
  }

  /* ngOninit(): void {
    this.http.putproductos(this.ProductId, this.updatedProduct).subscribe((data:any) => {
      this.products = data.products;
    })
  } */



  responseFromChild(event: any): void {
    console.log('respuesta del hijo', event);
  }

   public string = 'soy tu padre';

}
