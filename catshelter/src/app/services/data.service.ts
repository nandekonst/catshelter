import { Injectable } from '@angular/core';
import { ICat } from '../interfaces/cat';
import { IShelter} from '../interfaces/shelter';
import { DataOperations } from '@jexia/ng-jexia';
import { field } from 'jexia-sdk-js/api/dataops/filteringApi';
import { getCurrentDebugContext } from '@angular/core/src/view/services';
import { Observable, from } from 'rxjs';
import { Dataset } from 'jexia-sdk-js/api/dataops/dataset';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  shelterDataset: Dataset<IShelter> = this.dataOperations.dataset<IShelter>('shelters')
  catDataset: Dataset<ICat> = this.dataOperations.dataset<ICat>('cats');
  sortAsc
  public catsds = this.catDataset.select().execute();
  public cats:   Promise<ICat[]> = this.catDataset.select().relation(this.shelterDataset).execute();
  //public cats: Observable<ICat[]> = from(this.catDataset.select().relation(this.shelterDataset).execute());
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
  }

  removeCat(id: string){
    this.catDataset.delete().where(field("id").isEqualTo(id)).execute();
  }

  updateCat(cat: ICat){
    const filter = field("id").isEqualTo(cat.id)
    this.catDataset.update({"id":cat.id, "name":cat.name,"color":cat.color, "updated_at": cat.updated_at,"date_of_birth": cat.date_of_birth, "race":cat.race,"vaccinated": cat.vaccinated }).where(filter).execute();
  }

  updateShelter(shelter:IShelter){
    const filter = field("id").isEqualTo(shelter.id)
    this.shelterDataset.update({"id":shelter.id, "name":shelter.name, "address": shelter.address, "telephone": shelter.telephone, "email": shelter.email})
  }

  filterCats(cat: any):Promise<Array<any>>{
    console.log("COLOR" + cat.color)
    console.log("RACE" + cat.race)
    console.log("VACINNATED" + cat.vaccinated)
    let vaccinated = cat.vaccinated;
    let vaccinatedasString = vaccinated? "true":"false";
    let filterColor = field("color").isEqualTo(cat.color);
    let filterRace = field("race").isEqualTo(cat.race);
    let filterVaccinated = field("vaccinated").isEqualTo(cat.vaccinated);
    let filtercolorAndRace = field("color").isEqualTo(cat.color).and(field("race").isEqualTo(cat.race));
    let filtercolorAndVaccinated = field("color").isEqualTo(cat.color).and(field("vaccinated").isEqualTo(cat.vaccinated));
    let filterraceAndVaccinated = field("race").isEqualTo(cat.race).and(field("vaccinated").isEqualTo(cat.vaccinated));
    let filterAllConditions =  field("color").isEqualTo(cat.color).and(field("race").isEqualTo(cat.race).and(field("vaccinated").isEqualTo(cat.vaccinated)))

    if(cat.color && cat.race && cat.vaccinated){
      return this.catDataset.select().where(filterAllConditions).execute();
    } else if (cat.color && cat.race){
      return this.catDataset.select().where(filtercolorAndRace).execute();
    } else if (cat.color && cat.vaccinated){
      return this.catDataset.select().where(filtercolorAndRace).execute();
    } else if (cat.race && cat.vaccinated){
      return this.catDataset.select().where(filterraceAndVaccinated).execute();
    } else if(cat.color){
      return this.catDataset.select().where(filterColor).execute();
    } else if(cat.race){
      return this.catDataset.select().where(filterRace).execute();
    } else if (cat.vaccinated){
      return this.catDataset.select().where(filterVaccinated).execute();
    } 

  }

  sortAscending():Promise<Array<any>>{
    return this.catDataset.select().sortAsc("name").execute();
  }

  sortDescending():Promise<Array<any>>{
    return this.catDataset.select().sortDesc("name").execute();
  }




}
