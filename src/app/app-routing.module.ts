import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { DevicesComponent } from './admin/devices/devices.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { UsersComponent } from './admin/users/users.component';


const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', redirectTo: 'admin', pathMatch: 'full'},
  { path: 'admin', component: AdminComponent,
      children: [
        { path: '', redirectTo: 'producers', pathMatch: 'full'},
        { path: 'producers', loadChildren: '../app/admin/producers/producers.module#ProducersModule'},
        { path: 'categories', loadChildren: '../app/admin/categories/categories.module#CategoriesModule'},
        { path: 'devicetypes', loadChildren: '../app/admin/deviceTypes/deviceTypes.module#DeviceTypesModule'},
        { path: 'devices', loadChildren: '../app/admin/devices/devices.module#DevicesModule'},
        { path: 'orders', component: OrdersComponent},
        { path: 'users', component: UsersComponent}
      ]},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
