import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import {RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from './module/hero/hero-list/hero-list.component';
import {ProductListComponent} from './module/product/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'hero',
    component: HeroListComponent
  },
  {
    path: 'product',
    component: ProductListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HeroListComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
