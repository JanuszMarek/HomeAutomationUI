import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceTypesComponent } from './deviceTypes.component';
import { DeviceTypesResolveService } from './deviceTypes-resolve.service';

const routes: Routes = [
    { path: '', component: DeviceTypesComponent, canDeactivate: [], resolve: {deviceTypes: DeviceTypesResolveService} }
    ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DeviceTypesRoutingModule { }