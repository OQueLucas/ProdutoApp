import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserRoutes } from './user.routing';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ProdutosDetailsComponent } from './pages/produtos/produtos-details/produtos-details.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    ProdutosComponent,
    ProdutosDetailsComponent,
  ],
  imports: [CommonModule, UserRoutes],
})
export class UserModule {}
