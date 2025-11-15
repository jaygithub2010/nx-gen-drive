import { Component, Input } from '@angular/core';
import { MatChipEditedEvent, MatChipGrid, MatChipInputEvent, MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chips-textbox',
  imports: [MatChipGrid, MatFormFieldModule, MatChipsModule, MatIconModule],
  templateUrl: './chips-textbox.component.html',
  styleUrl: './chips-textbox.component.css'
})
export class ChipsTextboxComponent {
  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  @Input() listOfChips: string[] = [];
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.listOfChips.push(value);
    }
    event.chipInput!.clear();

  }
  remove(keyWord: string): void {
    const index = this.listOfChips.indexOf(keyWord);
    if (index >= 0) {
      this.listOfChips.splice(index, 1);
    }
  }

  edit(keyWord: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(keyWord);
      return;
    }

    this.remove(keyWord);
    this.listOfChips.push(value);
  }
}
