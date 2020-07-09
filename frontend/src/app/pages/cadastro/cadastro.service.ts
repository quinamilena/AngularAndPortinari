import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {
  api = `${environment.apiEndPoint}`;

  constructor(
    private http: HttpClient,
  ) { }

// Company
  createCompany(body: any) {
    return this.http.post(`${this.api}/company/createCompany`, body);
  }

  getAllCompany() {
    return this.http.get(`${this.api}/company/getAllCompany`);
  }

  getByIdCompany(idCompany: string) {
    return this.http.get(`${this.api}/company/getCompanyById/${idCompany}`);
  }

  updateCompany(body: any) {
    return this.http.put(`${this.api}/company/updateCompany/${body._id}`, body);
  }

  deleteCompany(idCompany: string) {
    return this.http.delete(`${this.api}/company/deleteCompany/${idCompany}`);
  }

// Products
  createProducts(idCompany: string, body: any) {
    return this.http.post(`${this.api}/products/createProduct/${idCompany}`, body);
  }

  gelAllProducts(idCompany: string) {
    return this.http.get(`${this.api}/products/getAllProducts/${idCompany}`);
  }

  getByIdProducts(idProduct: string) {
    return this.http.get(`${this.api}/products/getProductById/${idProduct}`);
  }

  updateProducts(body: any) {
    return this.http.put(`${this.api}/products/updateProduct/${body._id}`, body);
  }

  deleteProducts(idProduct: string) {
    return this.http.delete(`${this.api}/products/deleteProduct/${idProduct}`);
  }

}
