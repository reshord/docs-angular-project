import { Observable } from "rxjs";


export class themeService {
    currentTheme: boolean = false

    toggleTheme() {
        this.currentTheme = !this.currentTheme
    }
}