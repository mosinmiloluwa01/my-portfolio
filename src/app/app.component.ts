import { Component, OnInit } from '@angular/core';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';
  mode
  isDarkMode
  constructor(
    private utilsService: UtilsService,
  ) { }

  ngOnInit() {
    this.getMode()
  }

  getMode() {
    this.utilsService.currentMode.subscribe(data => {
      this.mode = data;
      this.isDarkMode = this.mode == 'dark' ? true : false;
      if (this.isDarkMode) {
        document.documentElement.style.setProperty('--parent-bg-color', `#111`);
        document.documentElement.style.setProperty('--grey-color', `#bbbbbb`);
        document.documentElement.style.setProperty('--light-border-grey', `#eaeaea61`);
        document.documentElement.style.setProperty('--transparent-grey-color', `#eaeaea0f`);
        document.documentElement.style.setProperty('--form-control-border-color', `transparent`);
        document.documentElement.style.setProperty('--form-control-bg-color', `#eaeaea0f`);
        document.documentElement.style.setProperty('--tile-bg-color', `#1c1c24`);
        return;
      }
      if (!this.isDarkMode) {
        document.documentElement.style.setProperty('--parent-bg-color', `white`);
        document.documentElement.style.setProperty('--grey-color', `#666`);
        document.documentElement.style.setProperty('--light-border-grey', `#eaeaea`);
        document.documentElement.style.setProperty('--transparent-grey-color', `#eaeaea`);
        document.documentElement.style.setProperty('--form-control-border-color', `#eaeaea`);
        document.documentElement.style.setProperty('--form-control-bg-color', `transparent`);
        document.documentElement.style.setProperty('--tile-bg-color', `transparent`);
      }
    })
  }
}
