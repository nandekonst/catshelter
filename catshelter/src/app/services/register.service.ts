import { Injectable } from '@angular/core';
import { ICat } from '../components/cat/cat';
import { IShelter} from '../components/shelter/shelter';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public catlist: ICat[] =  []
  public shelterlist: IShelter[] = []

  constructor() { }

  addCat(cat: ICat){
    this.catlist.push(cat);
    console.log("CATLIST" + JSON.stringify(this.catlist))

  }

  addShelter(shelter: IShelter){
    this.shelterlist.push(shelter);
    console.log("CATLIST" + JSON.stringify(this.catlist))

  }

  getCats(){
    return this.catlist;

  }

  getShelters(){
    return this.shelterlist;
  }
  
  removeShelter(id: number){
    const shelter = this.shelterlist.findIndex(s => s.id === id);
    this.shelterlist.splice(shelter, 1);

  }

  removeCat(id: number){
    const cat = this.catlist.findIndex(c => c.id === id);
    console.log("CATID" + cat)
    this.catlist.splice(cat, 1);

  }

  updateCat(id: number){

  }

  updateShelter(id:number){
    
  }

}
