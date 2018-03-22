import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { HttpService } from "./http.service";
import { AppComponent } from './app.component';
import { CreateAnimalComponent } from './create-animal/create-animal.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
    declarations: [
        AppComponent,
        CreateAnimalComponent,
        AnimalFormComponent,
        HomeComponent,
        PageNotFoundComponent,
        DetailsComponent,
        EditComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        HttpService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
