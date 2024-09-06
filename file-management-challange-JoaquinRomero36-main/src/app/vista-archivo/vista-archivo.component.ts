import { Component, NgModule } from '@angular/core';
import { FILE_LIST, OWNERS } from '../../data/file.storage';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vista-archivo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vista-archivo.component.html',
  styleUrl: './vista-archivo.component.css'
})
export class VistaArchivoComponent {
archivos = FILE_LIST;
peronas = OWNERS;
tabla: boolean = true;
agregar(){
  this.tabla = false;
}
eliminar(){
  alert("falta terminar")
}
volver(){
this.tabla = true;
}
crear(){
  alert("falta terminar")
}
}
