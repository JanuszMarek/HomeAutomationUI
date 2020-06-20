import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { MessageService, SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Logo } from '../model/logo';
import { ApiBaseService } from 'src/app/api-base.service';
import { BaseModel } from '../model/base';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export class BaseFormComponent extends BaseComponent implements OnInit {
  logoEditMode: boolean = true;
  logoBtnLabel: string;
  isModalVisible: boolean = false;
  dialogHeader: string;
  isLoading: boolean = false;
  dataForm: FormGroup;
  uploadedLogo: Logo;
  modelName: string;
  submitBtnDisable: boolean = false; 
  imageUploadUrl = "Api/Image/upload";
  storageUrl = "https://hamstorageaccount.blob.core.windows.net/";

  dropDownCategories: SelectItem[] = [];
  dropDownProducers: SelectItem[] = [];
  dropDownDeviceTypes: SelectItem[] = [];

  dataToEdit: BaseModel;
  @Input() set modalVisible(value: boolean) {
    this.isModalVisible = value;
    this.modalVisibleChanged.emit(value);
  }

  @Output() modalVisibleChanged = new EventEmitter<boolean>();
  @Output() dataSaved = new EventEmitter<boolean>();

  @ViewChild("fileUploader", null) fileUploader: FileUpload;

  constructor(
    protected apiService: ApiBaseService,
    protected messageService: MessageService,
    protected formBuilder: FormBuilder
  ) {
    super(
      messageService
    );
  }

  ngOnInit() {
    this.switchLogoForm();
  }

  //override every time
  protected buildForm<T>(data: T): FormGroup{
    return this.formBuilder.group({});
  }

  protected prepareDataToSend(): BaseModel { return; };

  get modalVisible(): boolean { 
    return this.isModalVisible; 
  }

  get isSubmitBtnDisable(): boolean {
    return this.submitBtnDisable;
  }

  protected getLogoSrc(): string {
    if (this.dataToEdit && this.dataToEdit.imageUrl) {
      console.log(this.storageUrl + this.dataToEdit.imageUrl);
      return this.storageUrl + this.dataToEdit.imageUrl;
    }
    return null;
  }

  protected setDataIfNotNull(data: any) {
    if (data != null) {
      this.dataToEdit = data;
    }
  }

  protected setHeaderDataAndForm(name: string, data?: any) {
    if(data != null) {
      this.dialogHeader = "Edit " + name;
      this.dataToEdit = data;
      this.dataForm = this.buildForm(data);
    }
    else {
      this.dialogHeader = "Create new " + name;
      this.dataToEdit = undefined;
      this.dataForm = this.buildForm(null);
    }
  }

  protected setDataToEdit(toEdit: BaseModel): void {
    this.setHeaderDataAndForm(toEdit.name, toEdit);
  }

  protected setDataToCreate(): void {
    this.setHeaderDataAndForm(this.modelName);
  }

  protected switchLogoForm() {
    this.logoEditMode = !this.logoEditMode;
  }

  protected closeModal(bool): void {
    this.dataForm.reset();
    this.modalVisible = false;
    this.dataSaved.emit(bool);
  }

  onUpload(event) {
    var result = event.originalEvent.body.result;
    this.dataForm.controls['imageId'].setValue(result.imageId);
    this.dataToEdit.imageUrl = result.imageUrl;

    this.switchLogoForm();
  }

  protected createNew() {
    this.submitBtnDisable = true;
    let data: BaseModel = this.prepareDataToSend();
    
    this.apiService.createData(data)
    .subscribe(
      resp => {}, 
      err => {
        this.messageError();
      }, 
      () => {
        this.closeModal(true);
        this.messageSucces(data.name, "created");
    });
  }

  protected editExisted() {
    this.submitBtnDisable = true;
    let data: BaseModel = this.prepareDataToSend();

    this.apiService.editData(data)    
    .subscribe(
      resp => {}, 
      err => {
        this.messageError();
      }, 
      () => {
        this.closeModal(true);
        this.messageSucces(data.name, "changed");
    });
  }
}
