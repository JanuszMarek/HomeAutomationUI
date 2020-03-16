import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseModel } from './shared/model/base';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiBaseService {

  constructor(
    private httpClient: HttpClient
  ) { }

  protected api(): string {
    return 'Api/';
  }

  protected apiAdmin(): string {
    // return 'Api/Admin/';
    return 'Api/';
  }

  protected get<TResult>(endpoint: string): Observable<TResult> {
    return this.createRequest('GET', endpoint, null);
  }

  protected post<TResult>(endpoint: string, data: any): Observable<TResult> {
    return this.createRequest('POST', endpoint, data);
  }

  protected put<TResult>(endpoint: string, data: any): Observable<TResult> {
    return this.createRequest('PUT', endpoint, data);
  }

  protected patch<TResult>(endpoint: string, data: any): Observable<TResult> {
    return this.createRequest('PATCH', endpoint, data);
  }

  protected delete<TResult>(endpoint: string, data?: any): Observable<TResult> {
    return this.createRequest('DELETE', endpoint, data ? data : null);
  }

  private createRequest<TResult>(method: string, endpoint: string, data: any): Observable<TResult> {
    const options = {
      body: JSON.stringify(data),
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    return this.httpClient.request(method, endpoint, options) as Observable<TResult>;
  }

  // to override
  getAllData(): Observable<Array<BaseModel>> { return; }
  getData(id: number): Observable<BaseModel> { return; }
  createData(data: any): Observable<BaseModel> { return; }
  editData(data: any): Observable<BaseModel> { return; }
  deleteData(id: number): Observable<BaseModel> { return; }
}
