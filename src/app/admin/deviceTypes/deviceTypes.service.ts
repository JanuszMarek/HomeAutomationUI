import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBaseService } from '../../api-base.service';
import { Observable } from 'rxjs';
import { DeviceType } from 'src/app/shared/model/device-type';

@Injectable({
  providedIn: 'root'
})
export class DeviceTypesService extends ApiBaseService{

  private urlName: string = 'DeviceType';

  constructor(httpClient: HttpClient) { 
    super(httpClient);
  }

  getAllData(): Observable<Array<DeviceType>> {
    return super.get<Array<DeviceType>>(super.api() + this.urlName);
  }

  getData(id: number): Observable<DeviceType> {
    return super.get<DeviceType>(super.api() + this.urlName + '/' + id);
  }

  createData(data: DeviceType): Observable<DeviceType> {
    return super.post<DeviceType>(super.apiAdmin() + this.urlName, data);
  }

  editData(data: DeviceType): Observable<DeviceType> {
    return super.put<DeviceType>(super.apiAdmin() + this.urlName + '/' + data.id, data);
  }

  deleteData(id: number): Observable<DeviceType> {
    return super.delete<DeviceType>(super.apiAdmin() + this.urlName + '/' + id);
  }
}
