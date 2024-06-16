import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'produtos',
        component: ProdutosComponent,
      },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

export const UserRoutes = RouterModule.forChild(routes);
