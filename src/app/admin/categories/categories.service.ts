import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBaseService } from '../../api-base.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiBaseService{

  private urlName: string = 'Categories';

  constructor(httpClient: HttpClient) { 
    super(httpClient);
  }

  getAllData(): Observable<Array<Category>> {
    return super.get<Array<Category>>(super.api() + this.urlName);
  }

  getData(id: number): Observable<Category> {
    return super.get<Category>(super.api() + this.urlName + '/' + id);
  }

  createData(data: Category): Observable<Category> {
    return super.post<Category>(super.apiAdmin() + this.urlName, data);
  }

  editData(data: Category): Observable<Category> {
    return super.put<Category>(super.apiAdmin() + this.urlName + '/' + data.id, data);
  }

  deleteData(id: number): Observable<Category> {
    return super.delete<Category>(super.apiAdmin() + this.urlName + '/' + id);
  }
}
