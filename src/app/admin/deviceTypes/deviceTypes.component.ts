import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { DeviceTypesFormComponent } from './deviceTypes-form/deviceTypes-form.component';
import { DeviceTypesService } from './deviceTypes.service';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'src/app/shared/base-list/base-list.component';
import { CategoriesService } from '../categories/categories.service';
import { LookupService } from 'src/app/lookup/lookup.service';

@Component({
  selector: 'app-deviceTypes',
  templateUrl: '../../shared/base-list/base-list.component.html',
  styleUrls: ['../../shared/base-list/base-list.component.css']
})
export class DeviceTypesComponent extends BaseListComponent implements OnInit {
  resolverName = 'deviceTypes';
  formComponent = DeviceTypesFormComponent;

  constructor( 
    protected apiService: DeviceTypesService,
    protected route: ActivatedRoute,
    protected componentFactoryResolver: ComponentFactoryResolver,
    protected confirmationService: ConfirmationService,
    protected lookupService: LookupService,
    protected messageService: MessageService
  ) {
    super(
      apiService,
      route, 
      componentFactoryResolver,
      confirmationService,
      messageService);
  }

  ngOnInit() {
    super.ngOnInit();

    this.lookupService.getCategoriesLookup().subscribe(result => {
      this.categoriesOptions = result
    });

    this.createColumn('logo','', null);
    this.createColumn('name','');
    this.createColumn('category','', 'category.id');
  }
}
