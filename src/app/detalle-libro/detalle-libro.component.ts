import { Component, OnInit } from '@angular/core';
import {CatalogoServices} from '../services/catalogo.service';
import {Book} from '../models/libro.module';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {

  idlibro: any;
  libro: Book[] = [];
  titulo: string;
  descripcion: string;
  precioventa: number;
  preciorenta: number;
  stockventa: number;
  stockrenta: number;

  libroDetalle : any;
  constructor(
    private catalogoServices: CatalogoServices,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idlibro = this.route.snapshot.paramMap.get('id');
    this.catalogoServices.listarLibros().subscribe(result => {
      this.libro = result;
      this.libro.forEach((item,i) => {
              if(this.libro[i].id == this.idlibro){
                this.titulo = item.title;
                this.descripcion = item.description;
                this.preciorenta = item.pricerental;
                this.precioventa = item.pricesale;
                this.stockrenta = item.stockrental;
                this.stockventa = item.stocksale;
              }
            })
    });
  }

}
