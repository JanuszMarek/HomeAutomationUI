import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoriesResolveService } from './categories-resolve.service';

const routes: Routes = [
    { path: '', component: CategoriesComponent, canDeactivate: [], resolve: {categories: CategoriesResolveService} }
    ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CategoriesRoutingModule { }