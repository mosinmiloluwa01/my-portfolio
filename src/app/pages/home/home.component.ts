import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mode
  isDarkMode
  constructor(
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    console.log('location>>', location)
  }

  getMode() {
    this.utilsService.currentMode.subscribe(data => {
      this.mode = data;
      this.isDarkMode = this.mode == 'dark' ? true : false;
      if (this.isDarkMode) {
        document.documentElement.style.setProperty('--parent-bg-color', `#111`);
        return;
      }
      if (!this.isDarkMode) {
        document.documentElement.style.setProperty('--parent-bg-color', `white`);
      }
    })
  }

}
