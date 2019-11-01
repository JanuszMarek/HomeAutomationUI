import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './devices.component';
import { DevicesResolveService } from './devices-resolve.service';

const routes: Routes = [
    { path: '', component: DevicesComponent, canDeactivate: [], resolve: {devices: DevicesResolveService} }
    ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DevicesRoutingModule { }