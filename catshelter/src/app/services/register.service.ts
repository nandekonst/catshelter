import { Injectable } from '@angular/core';
import { ICat } from '../components/cat/cat';
import { IShelter} from '../components/shelter/shelter';
import { DataOperations } from 'ng-jexia';
import { field } from 'jexia-sdk-js/api/dataops/filteringApi';
import { getCurrentDebugContext } from '@angular/core/src/view/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  shelterDataset = this.dataOperations.dataset<IShelter>('shelters')
  catDataset = this.dataOperations.dataset<ICat>('cats');
  public catsds = this.catDataset.select().execute();
  //public filteredcatsds = this.catDataset.select().execute();
  public cats = this.catDataset.select().relation(this.shelterDataset).execute();
  public shelters = this.shelterDataset.select().execute();
  
  constructor(private dataOperations: DataOperations) { }


  addCat(cat: ICat[]){
    console.log("THE CAT" + JSON.stringify(cat))
    this.catDataset.insert(cat).execute();
    
  }

  addShelter(shelter: IShelter[]){
    this.shelterDataset.insert(shelter).execute();
  }
  
  removeShelter(id: string){
    this.shelterDataset.delete().where(field("id").isEqualTo(id)).execute();
    console.log("Delete shelter" + id); 
  }

  removeCat(id: string){
    this.catDataset.delete().where(field("id").isEqualTo(id)).execute();
    console.log("Delete cat" + id);

  }

  updateCat(cat: any){
    const filter = field("id").isEqualTo(cat.cat.id)
    this.catDataset.update({"id":cat.cat.id, "name":cat.cat.name,"color":cat.cat.color, "updated_at": cat.updated_at,"date_of_birth": cat.cat.date_of_birth, "race":cat.cat.race,"vaccinated": cat.cat.vaccinated }).where(filter).execute();
    console.log("Edit cat" + JSON.stringify(cat.cat));
  }

  filterCatColorRace(cat: any):Promise<Array<any>>{
    console.log("This is the cat we're talking about" + JSON.stringify(cat.color))
    let vaccinated = cat.vaccinated;
    let vaccinatedasString = vaccinated? "true":"false";
    const filter = field("color").isEqualTo(cat.color);
    return this.catDataset.select().where(field("color").isEqualTo(cat.color)).execute();
 
  }

  updateShelter(shelter:any){
    const filter = field("id").isEqualTo(shelter.shelter.id)
    this.shelterDataset.update({"id":shelter.shelter.id, "name":shelter.shelter.name, "address": shelter.shelter.address, "telephone": shelter.shelter.telephone, "email": shelter.shelter.email})
  }

}
