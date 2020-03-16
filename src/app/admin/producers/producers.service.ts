import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBaseService } from '../../api-base.service';
import { Observable } from 'rxjs';
import { Producer } from 'src/app/shared/model/producer';

@Injectable({
  providedIn: 'root'
})

export class ProducersService extends ApiBaseService {

  private urlName = 'Producer';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAllData(): Observable<Array<Producer>> {
    return super.get<Array<Producer>>(super.api() + this.urlName);
  }

  getData(id: number): Observable<Producer> {
    return super.get<Producer>(super.api() + this.urlName + '/' + id);
  }

  createData(data: Producer): Observable<Producer> {
    return super.post<Producer>(super.apiAdmin() + this.urlName, data);
  }

  editData(data: Producer): Observable<Producer> {
    return super.put<Producer>(super.apiAdmin() + this.urlName + '/' + data.id, data);
  }

  deleteData(id: number): Observable<Producer> {
    return super.delete<Producer>(super.apiAdmin() + this.urlName + '/' + id);
  }
}
