import { Component, OnInit } from '@angular/core';
import {CatalogoServices} from '../services/catalogo.service';
import {Book} from '../models/libro.module';
import {AuthenticationServices} from '../services/authentication.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  libro: Book[] = [];
  libroDetalle : any;
  constructor(
    private catalogoServices: CatalogoServices,
    private auth: AuthenticationServices
  ) { }

  ngOnInit() {
    this.catalogoServices.listarLibros().subscribe(result => {
      this.libro = result;
    });

    this.auth.login('jesusiparraguirre', 'jesusiparraguirre123$').subscribe(result => {

    })
  }

  // detalleLibro(id: number){
  //   this.catalogoServices.listarLibros(1).subscribe( result => {
  //     this.libro = result;
  //     this.libro.forEach((item,i) => {
  //       if(this.libro[i].id = id){
  //         this.detalleLibro = this.libro;
  //       }
  //     })
  //   })
  // }

}
