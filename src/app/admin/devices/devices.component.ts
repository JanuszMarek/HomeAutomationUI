import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { DevicesFormComponent } from './devices-form/devices-form.component';
import { DevicesService } from './devices.service';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'src/app/shared/base-list/base-list.component';
import { ProducersService } from '../producers/producers.service';
import { DeviceTypesService } from '../deviceTypes/deviceTypes.service';

@Component({
  selector: 'app-Devices',
  templateUrl: '../../shared/base-list/base-list.component.html',
  styleUrls: ['../../shared/base-list/base-list.component.css']
})
export class DevicesComponent extends BaseListComponent implements OnInit {
  resolverName = 'devices';
  formComponent = DevicesFormComponent;
  producersOptions: SelectItem[] = [];
  deviceTypesOptions: SelectItem[] = [];

  constructor( 
    protected apiService: DevicesService,
    protected route: ActivatedRoute,
    protected componentFactoryResolver: ComponentFactoryResolver,
    protected confirmationService: ConfirmationService,
    protected messageService: MessageService,
    private producersService: ProducersService,
    private deviceTypesService: DeviceTypesService
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

    //get producers for multiselect
    this.producersService.getAllData().subscribe(received => {
      received.forEach(r => {
        this.producersOptions.push({label: r.name, value: r.id, icon: r.logo ? r.logo.file.data : null})
      });
    });

    //get deviceTypes for multiselect
    this.deviceTypesService.getAllData().subscribe(received => {
      received.forEach(r => {
        this.deviceTypesOptions.push({label: r.name, value: r.id, icon: r.logo ? r.logo.file.data : null})
      });
    });
    
    this.createColumn('logo','', null);
    this.createColumn('name','');
    this.createColumn('producer','', 'producer.id');
    this.createColumn('device Type','', 'deviceType.id');
  }

  assignAdditionalData() {
    let addData: SelectItem[][] = [];
    addData[0] = Object.assign(this.producersOptions);
    addData[1] = Object.assign(this.deviceTypesOptions);
    return addData;
  }
}
