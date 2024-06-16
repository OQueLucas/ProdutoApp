import { Routes, RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHeaderComponent,
    children: [
      {
        path: 'produtos',
        component: ProdutosComponent,
      },
      {
        path: 'fornecedores',
        component: FornecedoresComponent,
      },
    ],
  },
];

export const AdminRoutes = RouterModule.forChild(routes);
