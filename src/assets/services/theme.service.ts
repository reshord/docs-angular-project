export class themeService {
    currentTheme: boolean = true

    toggleTheme() {
        this.currentTheme = !this.currentTheme
    }
}