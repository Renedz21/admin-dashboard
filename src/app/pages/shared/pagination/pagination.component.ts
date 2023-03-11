import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 0;
  @Input() currentPage: number = 0;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  get TotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(): number[] {
    let pages = [];
    for (let i = 1; i <= this.TotalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  setPage(page: number) {
    if (page < 1 || page > this.TotalPages) return;
    this.pageChanged.emit(page);
  }

  onPageChanged(page: number) {
    this.setPage(page);
  }

}
