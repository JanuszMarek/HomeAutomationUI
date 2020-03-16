import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DevicesService } from '../devices.service';
import { MessageService, SelectItem } from 'primeng/api';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Device } from 'src/app/shared/model/device';

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
    
    this.dropDownProducers = this.additionalData[0];
    this.dropDownDeviceTypes = this.additionalData[1];
  }

  buildForm<Device>(data: Device): FormGroup {
    return this.formBuilder.group({
      name: [data != null ? this.dataToEdit.name : '', [Validators.required, Validators.maxLength(32)]],
      description: [data != null ? this.dataToEdit.description : '', [Validators.required, Validators.maxLength(64)]],
      logo: null,
      producerId: [data != null ? this.dataToEdit.producer.name : null, [Validators.required]],
      deviceTypeId: [data != null ? this.dataToEdit.deviceType.name : null, [Validators.required]],
      orderVariant: [data != null ? this.dataToEdit.orderVariant : null, [Validators.required, Validators.min(1)]],
      price: [data != null ? this.dataToEdit.price : null, [Validators.required, Validators.min(1)]],
      images: null
    });
  }

  prepareDataToSend() {
    let data: Device = Object.assign({}, this.dataForm.value);
    // data.logo = this.uploadedLogo;
    data.id = this.dataToEdit ? this.dataToEdit.id: null;

    return data;
  }
}
