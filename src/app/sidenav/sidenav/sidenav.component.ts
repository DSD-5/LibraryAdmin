import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  fillerNav = [
    // {name: 'Libro', route: 'admin/book', icon: ''},
    // {name: 'Usuario', route: 'admin/user', icon: ''},
    // {name: 'Precios', route: 'admin/book-price', icon: ''},
    // {name: 'Catalogo', route: 'catalogo', icon: ''},
    // {name: 'Registro', route: 'registro', icon: ''},
    // {name: 'Libro', route: 'libro', icon: ''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  shouldRun = true;

}
