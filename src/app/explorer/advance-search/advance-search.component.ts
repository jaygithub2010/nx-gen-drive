import { Component, OnInit } from '@angular/core';
import { SearchOptions } from 'src/app/models/search-options';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-advance-search',
  standalone: true,
  imports: [],
  templateUrl: './advance-search.component.html',
  styleUrl: './advance-search.component.css'
})
export class AdvanceSearchComponent implements OnInit{
    // constructor(public activeModal: NgbActiveModal) {} 

  searchOptions:SearchOptions;
  ngOnInit(): void {
    
    this.searchOptions = {
      searchFileName: [],
      nosearchFileName: [],
      fileType: ['Any'],
      createdDateRange: [],
      modifiedDateRange: [],
      owner: ['Any'],
      sharedWith: [],
      sharedBy: [],
      fullTextSearch: false,
      nofullTextSearch: false,
      searchLocation: [],
      labelName: [],
      isDeleted: false,
      isArchived: false,
      isStarred: false
    };
  }
  onDropdownSelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;

    if (selectedValue === 'fileType') {
      this.searchOptions.fileType = [selectedValue];
    } else if (selectedValue === 'owner') {
      this.searchOptions.owner = [selectedValue];
    } else if (selectedValue === 'searchLocation') {
      this.searchOptions.searchLocation = [selectedValue];
    } else if (selectedValue === 'labelName') {
      this.searchOptions.labelName = [selectedValue];
    }
  }
}
