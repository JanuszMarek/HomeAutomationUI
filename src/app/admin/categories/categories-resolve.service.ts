import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Category } from 'src/app/shared/model/Category';
import { CategoriesService } from './categories.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesResolveService implements Resolve<Array<Category>>{

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getAllData();
  }

  constructor(
    private apiService: CategoriesService
  ) { }
}
