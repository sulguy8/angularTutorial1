import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  insertUsi(usi){
    localStorage.setItem('user', JSON.stringify(usi));
    console.log(localStorage.getItem('user'))
  }
}
