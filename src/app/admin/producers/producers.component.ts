import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ProducersFormComponent } from './producers-form/producers-form.component';
import { ProducersService } from './producers.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'src/app/shared/base-list/base-list.component';

@Component({
  selector: 'app-producers',
  templateUrl: '../../shared/base-list/base-list.component.html',
  styleUrls: ['../../shared/base-list/base-list.component.css']
})
export class ProducersComponent extends BaseListComponent implements OnInit {
  resolverName = 'producers';
  formComponent = ProducersFormComponent;

  constructor( 
    protected apiService: ProducersService,
    protected route: ActivatedRoute,
    protected componentFactoryResolver: ComponentFactoryResolver,
    protected confirmationService: ConfirmationService,
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

    this.createColumn('logo','',null);
    this.createColumn('name','');
  }
}
