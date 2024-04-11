import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { WorkspaceComponent } from './work-space/work-space.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css'],
  standalone:true,
  imports:[CommonModule,WorkspaceComponent, ToolbarComponent,SearchBarComponent,LeftPanelComponent]
})
export class ExplorerComponent{

}
