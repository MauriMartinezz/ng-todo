import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [LoadingComponent, FooterComponent, SidebarComponent],
  imports: [CommonModule],
  exports: [LoadingComponent, FooterComponent, SidebarComponent],
})
export class SharedModule {}
