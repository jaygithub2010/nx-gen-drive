import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { ExplorerComponent } from './explorer.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { WorkspaceComponent } from './work-space/work-space.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    ExplorerComponent,
    WorkspaceComponent,
    LeftPanelComponent,
    SearchBarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    TextFieldModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule
  ]
})
export class ExplorerModule {}
