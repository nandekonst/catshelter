import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from "@angular/material";
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule   } from '@angular/material';


import {ReactiveFormsModule, FormsModule,FormGroup } from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';

import { OverviewComponent } from './components/overview/overview.component';
import { ShelterComponent } from './components/shelter/shelter.component';
import { CatComponent } from './components/cat/cat.component';
import { NgJexiaModule, DataOperationsModule } from 'ng-jexia';
import { CatDialogComponent } from './components/cat-dialog/cat-dialog.component';
import {ShelterDialogComponent} from './components/shelter-dialog/shelter-dialog.component';
import {DataService} from './services/data.service';
import { UpdatecatDialogComponent } from './components/updatecat-dialog/updatecat-dialog.component';
import { UpdateshelterDialogComponent } from './components/updateshelter-dialog/updateshelter-dialog.component';
import { FilterCatDialogComponent } from './components/filter-cat-dialog/filter-cat-dialog.component';
import { AllCatsViewComponent } from './components/all-cats-view/all-cats-view.component';
import { FilteredCatsViewComponent } from './components/filtered-cats-view/filtered-cats-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverviewComponent,
    ShelterComponent,
    CatComponent,
    CatDialogComponent,
    ShelterDialogComponent,
    UpdatecatDialogComponent,
    UpdateshelterDialogComponent,
    FilterCatDialogComponent,
    AllCatsViewComponent,
    FilteredCatsViewComponent
    ],
  imports: [
    BrowserModule,
    NgJexiaModule.initialize({
      projectID: '69d260b4-e887-43f8-9096-586f9ddd57be',
      key: '5d43c06d-974d-46a8-8299-164dc4e6a7f0',
      secret: 'jNmyFzXInsyE3RZB',
      providers: [
        DataOperationsModule,
      ],
    }),
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    CdkTableModule,
    ReactiveFormsModule, 
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
    
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [AllCatsViewComponent,CatDialogComponent, ShelterDialogComponent, UpdatecatDialogComponent, UpdateshelterDialogComponent, FilterCatDialogComponent]

})
export class AppModule { }
