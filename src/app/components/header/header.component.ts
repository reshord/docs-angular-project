import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateObservable } from '@ngrx/store';
import { themeService } from 'src/services/theme.service';
import { themeChangerAction } from 'src/store/theme.actions';
import { themeChangerSelector } from 'src/store/theme.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [Store]
})
export class HeaderComponent {
  darkTheme: boolean = false

  constructor(
      private store: Store
    ) {
      this.store.select(themeChangerSelector).subscribe(theme => this.darkTheme = theme.darkTheme)
    }

  toggleTheme() {
    // console.log(this.store.select(themeChanger))
    this.store.dispatch(themeChangerAction())
    // console.log(this.store)
    // this.themeService.toggleTheme()
    // this.currentTheme = this.themeService.currentTheme
  }

}
