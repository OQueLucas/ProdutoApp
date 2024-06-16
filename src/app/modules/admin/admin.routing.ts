import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
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
