import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdvanceSearchComponent } from "../advance-search/advance-search.component";
import { SearchOptions } from 'src/app/models/search-options';
import { DriveDataService } from 'src/app/core/services/drive-data.service';
import { Observable } from 'rxjs';
import { DriveItem } from 'src/app/models/drive-item';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone: true,
  imports: [CommonModule, AdvanceSearchComponent]
})
export class SearchBarComponent {
  constructor() {

  }
}
