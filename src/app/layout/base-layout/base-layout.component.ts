import { Component, DoCheck, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  links: any[] = [
    {
      name: 'Dashboard',
      icon: 'bx bx-grid-alt',
      link: '/'
    },
    {
      name: 'Usuarios',
      icon: 'bx bx-user ',
      link: '/users'
    },
    {
      name: 'Categorias',
      icon: 'bx bx-purchase-tag-alt',
      link: '/categories'
    },
    {
      name: 'Productos',
      icon: 'bx bx-package',
      link: '/products'
    },
    {
      name: 'Ordenes',
      icon: 'bx bx-cart-alt',
      link: '/'
    },
    // {
    //   name: 'Setting',
    //   icon: 'bx bx-cog',
    //   link: '/'
    // },
  ]
  @ViewChild('closeBtn') closeBtn!: ElementRef;
  @ViewChild('sidebar') sidebar!: ElementRef;

  constructor(
    // private authService : AuthService,
  ) { }

  ngOnInit(): void {

  }

  showSidebar() {
    const sidebar = this.sidebar.nativeElement;
    const closeBtn = this.closeBtn.nativeElement;

    sidebar.classList.toggle("open");
    closeBtn.classList.toggle("bx-menu-alt-right");

  }


}
