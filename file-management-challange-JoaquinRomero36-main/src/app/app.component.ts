import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { VistaArchivoComponent } from './vista-archivo/vista-archivo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VistaArchivoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';
}
