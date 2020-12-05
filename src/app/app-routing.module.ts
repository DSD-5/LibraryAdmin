import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookPricesListComponent } from './book-prices/book-prices-list/book-prices-list.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LibroComponent } from './libro/libro.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { ProductComponent } from './product/product/product.component';
import { RegistroComponent } from './registro/registro.component';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    // {
    //   path: '',
    //   redirectTo: '/home',
    //   pathMatch: 'full'
    // },
    { path: '',
    redirectTo: '/admin/book',
    pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'product',
      component: ProductComponent
    },
    {
      path: 'plans',
      component: PlansComponent
    },
    { path: 'carrito',
      component: CarritoComponent
    },
    { path: 'detalle/:id',
      component: DetalleLibroComponent
    },
    { path: 'login',
      component: LoginComponent
    },
    ]
  },
  {
    path: 'admin', component: SidenavComponent, children:
    [
      { path: 'book', component: BooksListComponent },
      { path: 'user', component: UsersListComponent },
      { path: 'book-price', component: BookPricesListComponent },
    ]
  },
  // { path: 'catalogo', component: CatalogoComponent },
  // { path: 'registro', component: RegistroComponent },
  // { path: 'libro', component: LibroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
