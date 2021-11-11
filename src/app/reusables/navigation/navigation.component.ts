import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  mode
  isDarkMode
  location
  window

  constructor(
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.location = location
    this.utilsService.currentMode.subscribe(data => {
      this.window = window
      this.mode = data;
      this.isDarkMode = this.mode == 'dark' ? true : false;
    })
  }

  setMode() {
    this.isDarkMode = !this.isDarkMode
    if (this.isDarkMode) {
      this.utilsService.setCurrentMode('dark');
      localStorage.setItem('mode', 'dark')
      return;
    }
    if (!this.isDarkMode) {
      this.utilsService.setCurrentMode('light');
      localStorage.setItem('mode', 'light')
    }
  }

}
