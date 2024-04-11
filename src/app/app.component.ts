import { Component } from '@angular/core';
import { WorkspaceComponent } from './explorer/work-space/work-space.component';
import { SearchBarComponent } from './explorer/search-bar/search-bar.component';
import { LeftPanelComponent } from './explorer/left-panel/left-panel.component';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExplorerComponent } from './explorer/explorer.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterModule, ExplorerComponent]
})
export class AppComponent {
  title = 'files-converge';
}
