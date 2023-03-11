import { Component, DoCheck, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent {

  links: any[] = [
    {
      name: 'Dashboard',
      icon: 'bx bx-grid-alt',
      link: '/'
    },
    {
      name: 'Usuarios',
      icon: 'bx bx-user ',
      link: '/'
    },
    {
      name: 'Categorias',
      icon: 'bx bx-purchase-tag-alt',
      link: '/categories'
    },
    {
      name: 'Analytics',
      icon: 'bx bx-pie-chart-alt-2',
      link: '/'
    },
    {
      name: 'Order',
      icon: 'bx bx-cart-alt',
      link: '/'
    },
    {
      name: 'Setting',
      icon: 'bx bx-cog',
      link: '/'
    },
  ]

  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('closeBtn') closeBtn!: ElementRef;

  showSidebar() {
    const sidebar = this.sidebar.nativeElement;
    const closeBtn = this.closeBtn.nativeElement;

    sidebar.classList.toggle("open");
    closeBtn.classList.toggle("bx-menu-alt-right");

  }


}
