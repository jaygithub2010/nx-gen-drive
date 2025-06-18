import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdvanceSearchComponent } from "../advance-search/advance-search.component";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone:true,
  imports: [CommonModule, AdvanceSearchComponent]
})
export class SearchBarComponent {

}
