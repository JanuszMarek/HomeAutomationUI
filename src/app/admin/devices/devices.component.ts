import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { DevicesFormComponent } from './devices-form/devices-form.component';
import { DevicesService } from './devices.service';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'src/app/shared/base-list/base-list.component';
import { ProducersService } from '../producers/producers.service';
import { DeviceTypesService } from '../deviceTypes/deviceTypes.service';
import { LookupService } from 'src/app/lookup/lookup.service';

@Component({
  selector: 'app-Devices',
  templateUrl: '../../shared/base-list/base-list.component.html',
  styleUrls: ['../../shared/base-list/base-list.component.css']
})
export class DevicesComponent extends BaseListComponent implements OnInit {
  resolverName = 'devices';
  formComponent = DevicesFormComponent;

  constructor( 
    protected apiService: DevicesService,
    protected route: ActivatedRoute,
    protected componentFactoryResolver: ComponentFactoryResolver,
    protected confirmationService: ConfirmationService,
    protected messageService: MessageService,
    private lookupService: LookupService
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
    this.lookupService.getProducersLookup().subscribe(result => {
      this.producersOptions = result
    });

    //get deviceTypes for multiselect
    this.lookupService.getDeviceTypesLookup().subscribe(result => {
      this.deviceTypesOptions = result
    });
    
    this.createColumn('logo','', null);
    this.createColumn('name','');
    this.createColumn('producer','', 'producer.id');
    this.createColumn('deviceType','', 'deviceType.id');
  }
}
