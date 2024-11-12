import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FavouritesComponent } from '../favourites/favourites.component';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css'],
  standalone:true,
  imports:[CommonModule,FavouritesComponent]
})
export class LeftPanelComponent {

}
