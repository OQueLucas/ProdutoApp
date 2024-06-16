import { Routes, RouterModule } from '@angular/router';
import { UserHeaderComponent } from './user-header/user-header.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

const routes: Routes = [
  {
    path: '',
    component: UserHeaderComponent,
    children: [
      {
        path: 'produtos',
        component: ProdutosComponent,
      },
    ],
  },
  {
    path: 'home',
    component: UserHeaderComponent,
  },
];

export const UserRoutes = RouterModule.forChild(routes);
