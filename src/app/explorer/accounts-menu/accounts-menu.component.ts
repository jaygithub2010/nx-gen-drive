import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/core/services/account.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-accounts-menu',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './accounts-menu.component.html',
  styleUrl: './accounts-menu.component.css'
})
export class AccountsMenuComponent {
  usr$: Observable<User | null>;
  constructor(private accService: AccountService) {
    this.usr$ = this.accService.getAccountDetails();
  }
}
