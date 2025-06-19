import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdvanceSearchComponent } from "../advance-search/advance-search.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone:true,
  imports: [CommonModule, AdvanceSearchComponent]
})
export class SearchBarComponent {
  constructor(private ngbModalService: NgbModal) {}

    openAdvanceSearch() {
    const modalRef = this.ngbModalService.open(AdvanceSearchComponent);
    // modalRef.componentInstance.searchOptions = this.searchOptions;
}
}
