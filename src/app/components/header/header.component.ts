import { Component, Input } from '@angular/core';
import { themeService } from 'src/app/services/theme-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private themeService: themeService) {}

  currentTheme: boolean = this.themeService.currentTheme

  toggleTheme() {
    this.themeService.toggleTheme()
    this.currentTheme = this.themeService.currentTheme
  }

}
