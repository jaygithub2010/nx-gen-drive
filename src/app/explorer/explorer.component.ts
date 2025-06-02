import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecentItemComponent } from './recent-items/recent-item.component';
import { WorkspaceComponent } from './work-space/work-space.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DriveItem, ItemType } from '../models/drive-item';
import { FavouritesComponent } from './favourites/favourites.component';
import { ExtensionAppsComponent } from './extension-apps/extension-apps.component';
import { AccountsMenuComponent } from './accounts-menu/accounts-menu.component';
import { CurrentLocationComponent } from './current-location/current-location.component';
import { SettingsDriveComponent } from './settings-drive/settings-drive.component';
import { ActivatedRoute } from '@angular/router';
import { CurrentPathComponent } from "./current-path/current-path/current-path.component";

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css'],
  standalone:true,
  imports: [CommonModule, WorkspaceComponent, ToolbarComponent, SearchBarComponent, RecentItemComponent, FavouritesComponent, ExtensionAppsComponent, AccountsMenuComponent, CurrentLocationComponent, SettingsDriveComponent, CurrentPathComponent]
})
export class ExplorerComponent{
  folderId:string;
  constructor(private route:ActivatedRoute)
  {
  }
  ngOnInit(){
    this.route.params.subscribe(routeParams=>{this.folderId=routeParams.id;
    });
  }

    // // For getting route data
    // this.activatedRoute.data.subscribe((data) => {
    //     this.data = data['info'];
    // });
}

