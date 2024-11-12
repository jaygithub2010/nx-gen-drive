import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { WorkspaceComponent } from './work-space/work-space.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DriveItem, ItemType } from '../models/drive-item';
import { FavouritesComponent } from './favourites/favourites.component';
import { ExtensionAppsComponent } from './extension-apps/extension-apps.component';
import { AccountsMenuComponent } from './accounts-menu/accounts-menu.component';
import { CurrentLocationComponent } from './current-location/current-location.component';
import { SettingsDriveComponent } from './settings-drive/settings-drive.component';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css'],
  standalone:true,
  imports:[CommonModule,WorkspaceComponent, ToolbarComponent,SearchBarComponent,LeftPanelComponent, FavouritesComponent, ExtensionAppsComponent, AccountsMenuComponent, CurrentLocationComponent, SettingsDriveComponent]
})
export class ExplorerComponent{
}
