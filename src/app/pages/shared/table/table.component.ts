import { AfterContentChecked, AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() headers!: string[];
  @Input() data!: any[][];
  @Input() columnaTitulo!: number;
  @Input() columnaAdmin!: number;
  @Input() description!: number;
}
