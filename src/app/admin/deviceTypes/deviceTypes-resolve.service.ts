import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DeviceTypesService } from './deviceTypes.service';
import { DeviceType } from 'src/app/shared/model/device-type';

@Injectable({
  providedIn: 'root'
})
export class DeviceTypesResolveService implements Resolve<Array<DeviceType>>{

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getAllData();
  }

  constructor(
    private apiService: DeviceTypesService
  ) { }
}
