import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WorkspaceComponent } from './explorer/work-space/work-space.component';
import { SearchBarComponent } from './explorer/search-bar/search-bar.component';
import { LeftPanelComponent } from './explorer/left-panel/left-panel.component';
import { ExplorerComponent } from './explorer/explorer.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    SearchBarComponent,
    LeftPanelComponent,
    ExplorerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
