import { Component } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent {
  visible = false;
  url: string = '';
  x = 0;
  y = 0;

  open(event: MouseEvent, url: string) {
    event.preventDefault();
    this.url = url;
    this.visible = true;
    this.x = event.clientX;
    this.y = event.clientY;
  }

  hide() {
    this.visible = false;
  }

  select(action: string) {
if (action === 'Edit') {
      window.open(this.url, '_blank');
    }
    this.hide();
  }
}
