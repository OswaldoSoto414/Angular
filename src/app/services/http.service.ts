import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public url = 'https://dummyjson.com/'

  constructor(private http: HttpClient) { }

  getproductos() {
    return this.http.get(this.url + 'products');
  }

  putproductos() {
    return this.http.put(this.url + 'products/1', {title: 'aifon'});
  }

  deleteProductos() {
    return this.http.delete(this.url + 'products/3');
  }

  PatcheProductos() {
    return this.http.patch(this.url + 'products/4',{title: "Jefte novato"});
  }
}

/* Es un servicio global y por lo tanto se puede agregar a cualquier componente,
    para ello se debe agregar en el constructor del componente */
