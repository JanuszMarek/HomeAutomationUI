import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Producer } from 'src/app/shared/model/producer';
import { ProducersService } from './producers.service';

@Injectable({
  providedIn: 'root'
})
export class ProducersResolveService implements Resolve<Array<Producer>>{

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getAllData();
  }

  constructor(
    private apiService: ProducersService
  ) { }
}
