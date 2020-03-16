import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { DeviceTypesFormComponent } from './deviceTypes-form/deviceTypes-form.component';
import { DeviceTypesService } from './deviceTypes.service';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'src/app/shared/base-list/base-list.component';
import { CategoriesService } from '../categories/categories.service';

@Component({
  selector: 'app-deviceTypes',
  templateUrl: '../../shared/base-list/base-list.component.html',
  styleUrls: ['../../shared/base-list/base-list.component.css']
})
export class DeviceTypesComponent extends BaseListComponent implements OnInit {
  resolverName = 'deviceTypes';
  formComponent = DeviceTypesFormComponent;
  categoriesOptions: SelectItem[] = [];

  constructor( 
    protected apiService: DeviceTypesService,
    protected route: ActivatedRoute,
    protected componentFactoryResolver: ComponentFactoryResolver,
    protected confirmationService: ConfirmationService,
    protected messageService: MessageService,
    private categoriesService: CategoriesService
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

    // get categories for multiselect
    this.categoriesService.getAllData().subscribe(received => {
      received.forEach(r => {
        // this.categoriesOptions.push({label: r.name, value: r.id, icon: r.logo ? r.logo.file.data : null})
        this.categoriesOptions.push({label: r.name, value: r.id, icon: null})
      });
    });

    this.createColumn('logo','', null);
    this.createColumn('name','');
    this.createColumn('category','', 'category.id');
  }

  assignAdditionalData() {
    let addData: SelectItem[][] = [];
    addData[0] = Object.assign(this.categoriesOptions);
    return addData;
  }
}
