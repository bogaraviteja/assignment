import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CustomersComponent } from './components/customers/customers.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      {path: '', component:CustomersComponent },
    ],
  },
  { path: 'orders', component: OrdersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
