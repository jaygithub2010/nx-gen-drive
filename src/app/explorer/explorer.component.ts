import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { WorkspaceComponent } from './work-space/work-space.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DriveItem, ItemType } from '../models/drive-item';
import { FavouritesComponent } from './favourites/favourites.component';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css'],
  standalone:true,
  imports:[CommonModule,WorkspaceComponent, ToolbarComponent,SearchBarComponent,LeftPanelComponent, FavouritesComponent]
})
export class ExplorerComponent{
  testItem:DriveItem= { id:"1",name:"test",itemType:ItemType.FOLDER, size:123}
  // ngOnInit() {
  //   this._svgRegistry.addSvg('folder-icon',`<svg><g><path fill="blue"
  //    d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
  //     ></path>
  //     <path d="M0 0h24v24H0z" fill="none"></path>
  //   </g>
  // </svg>` );
  // }
}
