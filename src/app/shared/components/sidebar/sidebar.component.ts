import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isSidebarOpen: boolean = false;
  showTooltips: boolean = true;
  showUserInfo: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.showTooltips = !this.showTooltips;
    this.showUserInfo = !this.showUserInfo;
  }

  search() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.showTooltips = !this.showTooltips;
  }
}
