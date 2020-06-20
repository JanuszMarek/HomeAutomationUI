import { Component, OnInit, Input } from '@angular/core';
import { DeviceType } from 'src/app/shared/model/device-type';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DeviceTypesService } from '../deviceTypes.service';
import { MessageService, SelectItem } from 'primeng/api';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { LookupService } from 'src/app/lookup/lookup.service';

@Component({
  selector: 'app-DeviceTypes-form',
  templateUrl: '../../../shared/base-form/base-form.component.html',
  styleUrls: ['../../../shared/base-form/base-form.component.css']
})
export class DeviceTypesFormComponent extends BaseFormComponent implements OnInit {
  modelName: string = 'devicetype';
  dropDownCategories: SelectItem[] = [];

  @Input() dataToEdit: DeviceType;

  constructor(
    protected apiService: DeviceTypesService,
    protected lookupService: LookupService,
    protected messageService: MessageService,
    protected formBuilder: FormBuilder
  ) {
    super(
      apiService,
      messageService, 
      formBuilder
    );
  }

  ngOnInit() {
    super.ngOnInit();
    //get categories for dropdown
    this.lookupService.getCategoriesLookup().subscribe(result => {
      this.dropDownCategories = result
    });
  }

  buildForm<DeviceType>(data: DeviceType): FormGroup {
    return this.formBuilder.group({
      name: [data != null ? this.dataToEdit.name : '', [Validators.required, Validators.maxLength(32)]],
      description: [data != null ? this.dataToEdit.description : '', [Validators.maxLength(64)]],
      categoryId: [data != null ? this.dataToEdit.categoryId : null, [Validators.required]],
      imageId: [data ? this.dataToEdit.imageId : null],
      rowVersion: [data ? this.dataToEdit.rowVersion : null]
    });
  }

  prepareDataToSend() {
    let data: DeviceType = Object.assign({}, this.dataForm.value);
    // data.logo = this.uploadedLogo;
    data.id = this.dataToEdit ? this.dataToEdit.id: null;

    // TO DO:
    // data.productCategoryId = this.dropDownCategories.find(p => p.)

    return data;
  }
}
