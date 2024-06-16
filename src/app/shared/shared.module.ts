import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [MenuComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, MenuComponent],
})
export class SharedModule {}
