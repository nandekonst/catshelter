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

import { OverviewComponent } from './components/overview/overview.component';
import { ShelterComponent } from './components/shelter/shelter.component';
import { CatComponent } from './components/cat/cat.component';
import { NgJexiaModule, DataOperationsModule } from 'ng-jexia';
import { CatDialogComponent } from './components/cat-dialog/cat-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverviewComponent,
    ShelterComponent,
    CatComponent,
    CatDialogComponent
  ],
  imports: [
    BrowserModule,
    NgJexiaModule.initialize({
      projectID: '69d260b4-e887-43f8-9096-586f9ddd57be',
      key: '8173440b-c01c-4c39-9c65-880078a3f6fc',
      secret: 'eEFGMGybQBI5hy89',
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CatDialogComponent]

})
export class AppModule { }
