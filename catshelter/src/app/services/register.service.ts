import { Injectable } from '@angular/core';
import { ICat } from '../components/cat/cat';
import { IShelter} from '../components/shelter/shelter';
import { DataOperations } from 'ng-jexia';
import { field } from 'jexia-sdk-js/api/dataops/filteringApi';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  shelterDataset = this.dataOperations.dataset<IShelter>('shelters')
  catDataset = this.dataOperations.dataset<ICat>('cats');
  //public cats = this.catDataset.select().execute();
  public cats = this.catDataset.select().relation(this.shelterDataset).execute();
  public shelters = this.shelterDataset.select().execute();
  constructor(private dataOperations: DataOperations) { }

  

  addCat(cat: ICat[]){
    this.catDataset.insert(cat).execute();
  }

  addShelter(shelter: IShelter[]){
    this.shelterDataset.insert(shelter).execute();
  }
  
  removeShelter(id: string){
    this.shelterDataset.delete().where(field("id").isEqualTo(id)).execute();
    console.log("Delete shelter" + id);
   // const shelter = this.shelterlist.findIndex(s => s.id === id);
    //this.shelterlist.splice(shelter, 1);

  }

  removeCat(id: string){
    this.catDataset.delete().where(field("id").isEqualTo(id)).execute();
    console.log("Delete cat" + id);


  }

  updateCat(cat: ICat){
    //this.catDataset.update(cat).execute();
    console.log("Edit cat" + JSON.stringify(cat));

  }

  updateShelter(id:number){
    
  }

}
