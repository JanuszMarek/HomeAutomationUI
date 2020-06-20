import { Component, OnInit, ComponentRef, ComponentFactory, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ApiBaseService } from 'src/app/api-base.service';
import { BaseModel } from '../model/base';
import { Column } from '../model/column';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.css']
})
export class BaseListComponent extends BaseComponent implements OnInit {
  categoriesOptions: SelectItem[] = [];
  producersOptions: SelectItem[] = [];
  deviceTypesOptions: SelectItem[] = [];

  constructor(
    protected apiService: ApiBaseService,
    protected route: ActivatedRoute,
    protected componentFactoryResolver: ComponentFactoryResolver,
    protected confirmationService: ConfirmationService,
    protected messageService: MessageService,
  ) {
    super(messageService);
  }

  @ViewChild("formDataModalContainerRef", { read: ViewContainerRef, static: true}) formDataModalContainerRef: ViewContainerRef;
  protected data: BaseModel[];
  protected resolverName: string;
  protected formDataComponentRef: ComponentRef<any>;
  protected formComponent;
  protected columns : Column[] = [];
  public isLoading = false;
  storageUrl = "https://hamstorageaccount.blob.core.windows.net/";

  getImageUrl(model: BaseModel) {
    if(model.imageUrl)
    {
      return this.storageUrl + model.imageUrl;
    }
    return null;
  }

  get tableWidthClass() {
    if (this.columns.length < 3) {
      return 'ui-lg-7';
    }
    if (this.columns.length === 3) {
      return 'ui-lg-9';
    }
    if (this.columns.length === 4) {
      return 'ui-lg-11';
    }
    return 'ui-lg-12';
  }

  ngOnInit() {
    this.data = this.route.snapshot.data[this.resolverName];
  }

  protected reloadData(): void {
    this.isLoading = true;
    this.apiService.getAllData().subscribe(
      receivedData => {
        this.data = receivedData;
        this.isLoading = false;
      },
      err => {
        this.messageError();
        this.isLoading = false;
      }
    )
  }

  protected newData(): void {
    this.destroyComponentInstanceIfNull();
    this.createModalComponent(this.formComponent);
  }

  protected editData(id: number): void {
    this.destroyComponentInstanceIfNull();
    this.apiService.getData(id).subscribe(
      receivedData => {
        receivedData.id = id;
        this.createModalComponent(this.formComponent, receivedData);
      },
      err => {
        this.messageError();
      });
  }

  protected deleteData(id: number, name: string): void {
    var fCall = (): void => {
      //Actual logic to perform a confirmation
      this.apiService.deleteData(id).subscribe(
        resp => {}, 
        err => {
          this.messageError();
        }, 
        () => {
          this.reloadData()
          this.messageSucces(name, "deleted");
        }
      );
    };

    this.confirmationDialog(name, fCall);
  }

  protected createColumn(field: string, width: string, sortndFilterBy?: string) {
    var column : Column = {
      field: field,
      header: field.substring(0,1).toUpperCase() + field.substring(1, field.length),
      width: width,
      sortBy: this.switchEmpty(sortndFilterBy, field),
      filterBy: this.switchEmpty(sortndFilterBy, field),
    };
    this.columns.push(column);
  }

  protected switchEmpty(data, data1) {
    let retVal;
    switch (data) {
      case undefined: {
        retVal = data1;
      } break; 
      case null: {
        retVal = null;
      } break;
      default: 
        retVal = data;
    }
    return retVal;
  }

  private createComponent<T>(formComponent: any): ComponentRef<T> {
    const modalFactory: ComponentFactory<T> = this.componentFactoryResolver.resolveComponentFactory(formComponent);
    return this.formDataModalContainerRef.createComponent(modalFactory);
  }

  private destroyComponentInstanceIfNull(): void {
    if (this.formDataModalContainerRef.get(0) !== null) {
      this.formDataComponentRef.destroy();
    }
  }

  private createModalComponent(formComponent: any, data?: BaseModel): void
  {
    this.formDataComponentRef = this.createComponent(formComponent);
    if(data != null)
    {
      this.formDataComponentRef.instance.setDataToEdit(data);
    }
    else
    {
      this.formDataComponentRef.instance.setDataToCreate();
    }
    this.formDataComponentRef.instance.modalVisible = true;
    this.formDataComponentRef.instance.dataSaved.subscribe(val => 
      {
        if(val)
          this.reloadData();
       }
    );
  }

  private confirmationDialog(name: string, fCall: () => void): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete ' + name +'?',
      accept: () => fCall()
  });
  }
}
