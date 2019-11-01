import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { CategoriesResolveService } from './categories-resolve.service';
import { CategoriesService } from './categories.service';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesFormComponent
  ],
  imports: [
    SharedModule,
    CategoriesRoutingModule,
  ],
  entryComponents: [CategoriesFormComponent],
  providers: [CategoriesResolveService, CategoriesService],
})
export class CategoriesModule { }
