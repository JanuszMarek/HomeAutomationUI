import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Category } from 'src/app/shared/model/Category';
import { DevicesService } from './devices.service';

@Injectable({
  providedIn: 'root'
})
export class DevicesResolveService implements Resolve<Array<Category>>{

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getAllData();
  }

  constructor(
    private apiService: DevicesService
  ) { }
}
