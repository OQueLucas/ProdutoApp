import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutes } from './admin.routing';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ProdutosDetailsComponent } from './pages/produtos/produtos-details/produtos-details.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';
import { FornecedoresDetailsComponent } from './pages/fornecedores/fornecedores-details/fornecedores-details.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AdminComponent,
    ProdutosComponent,
    ProdutosDetailsComponent,
    FornecedoresComponent,
    FornecedoresDetailsComponent,
    MenuComponent,
  ],
  imports: [CommonModule, AdminRoutes],
})
export class AdminModule {}
