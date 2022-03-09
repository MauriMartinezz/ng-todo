import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [LoadingComponent, NavbarComponent, FooterComponent, SidebarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, LoadingComponent, FooterComponent],
})
export class SharedModule {}
