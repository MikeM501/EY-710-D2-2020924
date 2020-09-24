import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertscomponenttsComponent } from './product-list/product-alertscomponentts/product-alertscomponentts.component';
import { ProductAlertscomponenthtmlComponent } from './product-alertscomponenthtml/product-alertscomponenthtml.component';
import { ProductAlertscomponentcssComponent } from './product-alertscomponentcss/product-alertscomponentcss.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertscomponenttsComponent,
    ProductAlertscomponenthtmlComponent,
    ProductAlertscomponentcssComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/