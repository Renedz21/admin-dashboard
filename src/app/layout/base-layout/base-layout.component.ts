import { Component, DoCheck, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent {

  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('closeBtn') closeBtn!: ElementRef;

  showSidebar() {
    const sidebar = this.sidebar.nativeElement;
    const closeBtn = this.closeBtn.nativeElement;

    sidebar.classList.toggle("open");
    closeBtn.classList.toggle("bx-menu-alt-right");

  }


}
