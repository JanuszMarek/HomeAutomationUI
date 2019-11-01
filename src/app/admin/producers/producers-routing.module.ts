import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducersComponent } from './producers.component';
import { ProducersResolveService } from './producers-resolve.service';

const routes: Routes = [
    { path: '', component: ProducersComponent, canDeactivate: [], resolve: {producers: ProducersResolveService} }
    ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProducersRoutingModule { }