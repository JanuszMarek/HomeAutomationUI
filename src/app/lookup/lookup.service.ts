import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBaseService } from '../api-base.service';
import { Observable } from 'rxjs';
import { SelectItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class LookupService extends ApiBaseService {
  private urlName = 'Lookup';

  constructor(httpClient: HttpClient) {
      super(httpClient);
  }
  
  getCategoriesLookup() : Observable<Array<SelectItem>> {
      return this.getLookup('categories');
  }

  getDeviceTypesLookup() : Observable<Array<SelectItem>> {
    return this.getLookup('deviceTypes');
  }

  getProducersLookup() : Observable<Array<SelectItem>> {
    return this.getLookup('producers');
  }

  private getLookup(lookupName: string) : Observable<Array<SelectItem>> {
    return super.get<Array<SelectItem>>(super.api() + this.urlName + '/' + lookupName);
  }
}
