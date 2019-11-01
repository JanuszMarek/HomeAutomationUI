import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { CategoriesService } from './categories.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'src/app/shared/base-list/base-list.component';

@Component({
  selector: 'app-categories',
  templateUrl: '../../shared/base-list/base-list.component.html',
  styleUrls: ['../../shared/base-list/base-list.component.css']
})
export class CategoriesComponent extends BaseListComponent implements OnInit {
  resolverName = 'categories';
  formComponent = CategoriesFormComponent;

  constructor( 
    protected apiService: CategoriesService,
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

    this.createColumn('logo','', null);
    this.createColumn('name','');
  }
}
