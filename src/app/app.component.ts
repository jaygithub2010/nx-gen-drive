import { Component } from '@angular/core';
import { WorkspaceComponent } from './explorer/work-space/work-space.component';
import { SearchBarComponent } from './explorer/search-bar/search-bar.component';
import { LeftPanelComponent } from './explorer/left-panel/left-panel.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'files-converge';
}
