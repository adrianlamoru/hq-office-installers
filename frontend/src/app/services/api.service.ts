import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HQForm} from '../models/form';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  selectedForm: HQForm;
  hqforms: HQForm[];
  readonly URL_API = 'http://localhost:8000/data';
  
  constructor(private http: HttpClient) { 
    this.selectedForm = new HQForm();
  }

  getForm() {
    return this.http.get(this.URL_API);
  }

  putForm(hqform: HQForm) {
    return this.http.put(this.URL_API + `/${hqform.id}/`, hqform);
  }

  postForm(hqform: HQForm) {
    return this.http.post(this.URL_API + `/`, hqform);
    
  }

  deleteForm(id: string) {
    return this.http.delete(this.URL_API + `/${id}`);
  }
}
