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

import {ReactiveFormsModule } from '@angular/forms';

import { OverviewComponent } from './components/overview/overview.component';
import { ShelterComponent } from './components/shelter/shelter.component';
import { CatComponent } from './components/cat/cat.component';
import { NgJexiaModule, DataOperationsModule } from 'ng-jexia';
import { CatDialogComponent } from './components/cat-dialog/cat-dialog.component';
import {ShelterDialogComponent} from './components/shelter-dialog/shelter-dialog.component';
import {RegisterService} from './services/register.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverviewComponent,
    ShelterComponent,
    CatComponent,
    CatDialogComponent,
    ShelterDialogComponent
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
    MatCheckboxModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent],
  entryComponents: [CatDialogComponent, ShelterDialogComponent]

})
export class AppModule { }
