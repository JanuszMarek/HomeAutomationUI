import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DevicesService } from '../devices.service';
import { MessageService, SelectItem } from 'primeng/api';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Device } from 'src/app/shared/model/device';
import { LookupService } from 'src/app/lookup/lookup.service';

@Component({
  selector: 'app-Devices-form',
  templateUrl: '../../../shared/base-form/base-form.component.html',
  styleUrls: ['../../../shared/base-form/base-form.component.css']
})
export class DevicesFormComponent extends BaseFormComponent implements OnInit {
  modelName: string = 'device';
  dropDownProducers: SelectItem[] = [];
  dropDownDeviceTypes: SelectItem[] = [];

  @Input() dataToEdit: Device;

  constructor(
    protected apiService: DevicesService,
    protected lookupService: LookupService,
    protected messageService: MessageService,
    protected formBuilder: FormBuilder,
  ) {
    super(
      apiService,
      messageService, 
      formBuilder
    );
  }

  ngOnInit() {
    super.ngOnInit();
    
    //get producers for multiselect
    this.lookupService.getProducersLookup().subscribe(result => {
      this.dropDownProducers = result
    });

    //get deviceTypes for multiselect
    this.lookupService.getDeviceTypesLookup().subscribe(result => {
      this.dropDownDeviceTypes = result
    });
  }

  buildForm<Device>(data: Device): FormGroup {
    return this.formBuilder.group({
      name: [data ? this.dataToEdit.name : '', [Validators.required, Validators.maxLength(32)]],
      description: [data ? this.dataToEdit.description : '', [Validators.maxLength(64)]],
      imageId: [data ? this.dataToEdit.imageId : null],
      producerId: [data ? this.dataToEdit.producerId : null, [Validators.required]],
      deviceTypeId: [data ? this.dataToEdit.deviceTypeId : null, [Validators.required]],
      images: null,
      rowVersion: [data ? this.dataToEdit.rowVersion : null]
    });
  }

  prepareDataToSend() {
    let data: Device = Object.assign({}, this.dataForm.value);
    // data.logo = this.uploadedLogo;
    data.id = this.dataToEdit ? this.dataToEdit.id: null;

    return data;
  }
}
