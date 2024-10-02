import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuItems = [
    { name: 'Inicio', link: '#' },
    { name: 'Transparencia', link: '#' },
    { name: 'Atención a la ciudadanía', link: '#' },
    { name: 'Registro', link: '#' },
    { name: 'Ingreso', link: '#' },
    { name: 'IPS y proveedores', link: '#' },
    { name: 'Entidades territoriales', link: '#' },
    { name: 'Nuestra entidad', link: '#' },
    { name: 'Análitica', link: '#' }
  ];
}
