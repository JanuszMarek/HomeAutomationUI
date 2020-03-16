import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBaseService } from '../../api-base.service';
import { Observable } from 'rxjs';
import { Device } from 'src/app/shared/model/device';

@Injectable({
  providedIn: 'root'
})
export class DevicesService extends ApiBaseService {

  private urlName = 'Device';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAllData(): Observable<Array<Device>> {
    return super.get<Array<Device>>(super.api() + this.urlName);
  }

  getData(id: number): Observable<Device> {
    return super.get<Device>(super.api() + this.urlName + '/' + id);
  }

  createData(data: Device): Observable<Device> {
    return super.post<Device>(super.apiAdmin() + this.urlName, data);
  }

  editData(data: Device): Observable<Device> {
    return super.put<Device>(super.apiAdmin() + this.urlName + '/' + data.id, data);
  }

  deleteData(id: number): Observable<Device> {
    return super.delete<Device>(super.apiAdmin() + this.urlName + '/' + id);
  }
}
