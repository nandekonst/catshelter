import { Injectable } from '@angular/core';
import { ICat } from '../components/cat/cat';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public catlist: ICat[] =  []

  constructor() { }

  addCat(cat: ICat){
    this.catlist.push(cat);
    console.log("CATLIST" + JSON.stringify(this.catlist))

  }

  getCats(){
    return this.catlist;

  }

  removeCat(id: number){
    const cat = this.catlist.findIndex(c => c.id === id);
    console.log("CATID" + cat)
    this.catlist.splice(cat, 1);

  }

  updateCat(id: number){

  }

}
