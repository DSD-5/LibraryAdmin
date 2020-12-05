import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanesComponent } from './planes/planes.component';
import { LibroComponent } from './libro/libro.component';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';
import { ListaLibroComponent } from './lista-libro/lista-libro.component';
import { RegistroComponent } from './registro/registro.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { MaterialModule } from './material/material.module';
import { UsersListComponent } from './users/users-list/users-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './users/user-form/user-form.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { GenderPipe } from './shared/pipes/gender.pipe';
import { StatePipe } from './shared/pipes/state.pipe';
import { CoinPipe } from './shared/pipes/coin.pipe';
import { BookPricesListComponent } from './book-prices/book-prices-list/book-prices-list.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product/product.component';
import { PlansComponent } from './plans/plans.component';
import { BookPricesFormComponent } from './book-prices/book-prices-form/book-prices-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanesComponent,
    LibroComponent,
    NuevoLibroComponent,
    ListaLibroComponent,
    RegistroComponent,
    CatalogoComponent,
    DetalleLibroComponent,
    CarritoComponent,
    LoginComponent,
    SidenavComponent,
    UsersListComponent,
    UserFormComponent,
    BooksListComponent,
    BookFormComponent,
    GenderPipe,
    StatePipe,
    CoinPipe,
    BookPricesListComponent,
    LayoutComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    PlansComponent,
    BookPricesFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
