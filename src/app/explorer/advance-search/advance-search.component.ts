import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchOptions } from 'src/app/models/search-options';
import {COMMA, ENTER, O} from '@angular/cdk/keycodes';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ChipsTextboxComponent } from "src/app/core/utils/chips-textbox/chips-textbox.component";
import { NgCommonService } from 'src/app/core/services/ng-common.service';

@Component({
  selector: 'app-advance-search',
  standalone: true,
  imports: [FormsModule, MatChipsModule, MatFormFieldModule, MatIconModule, ChipsTextboxComponent],
  templateUrl: './advance-search.component.html',
  styleUrl: './advance-search.component.css'
})
export class AdvanceSearchComponent implements OnInit{
    // constructor(public activeModal: NgbActiveModal) {} 
  fileTypes: string[] = ['Any', 'Word Document', 'Spreadsheet', 'Presentation', 'PDF', 'Image', 'Video', 'Audio', 'Archive', "Code File"];
  owners: string[] = ['Any', 'Me', 'Not Me', 'Specific People'];
  locations: string[] = ['My Drive', 'Shared with me', 'Starred', 'Trash', 'Archived'];
  seletedFileType: string = 'Any';
  @Output() searchOptionsEmitter= new EventEmitter<SearchOptions>();  
  constructor(private _commonService: NgCommonService)
  {

  }
  searchOptions: SearchOptions = {
      searchFileName: [],
      noSearchFileName: [],
      fileType: ['Any'],
      createdDateRange:[new Date(1970,1,1).toISOString().substring(0, 10), new Date().toISOString().substring(0, 10) ],
      modifiedDateRange: [new Date(1970,1,1).toISOString().substring(0, 10), new Date().toISOString().substring(0, 10)],
      owner: ['Any'],
      sharedWith: [],
      sharedBy: [],
      fullTextSearch: [],
      noFullTextSearch: [],
      searchLocation: [],
      labelName: [],
      isDeleted: false,
      isArchived: false,
      isStarred: false
    };;
  selectedOwner: string = 'Any';

  ngOnInit(): void {

  }
  selectFileType(fileType: string) {
    this.seletedFileType = fileType;
    this.searchOptions.fileType = [fileType];
  }
  selectOwner(owner: string) {
    this.searchOptions.owner = [owner];
    this.selectedOwner = owner;
  }
  onSearch() {
    this.searchOptionsEmitter.emit(this.searchOptions);
    this._commonService.setSearchOptions(this.searchOptions);
  }
}
